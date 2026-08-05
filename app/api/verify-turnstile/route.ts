import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token is required" },
        { status: 400 }
      );
    }

    const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

    // If secret key is not set, allow standard frontend verification in test mode
    if (!secretKey) {
      return NextResponse.json({
        success: true,
        message: "Verification successful (Development / Test Mode)",
        isTestMode: true,
      });
    }

    // Verify token with Cloudflare API
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token);

    const clientIp = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip");
    if (clientIp) {
      formData.append("remoteip", clientIp);
    }

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      }
    );

    const outcome = await verifyResponse.json();

    if (outcome.success) {
      return NextResponse.json({
        success: true,
        message: "Bot verification successful",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Verification failed. Please try again.",
          errorCodes: outcome["error-codes"],
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error during verification" },
      { status: 500 }
    );
  }
}
