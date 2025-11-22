import { getGoogleDrive } from "@/lib/google-drive";

export async function GET() {
  try {
    const FILE_ID = process.env.FILE_ID;
    if (!FILE_ID) throw new Error("FILE ID missing.");

    let drive = getGoogleDrive();

    let fileStream = await drive.files.export(
      { fileId: FILE_ID, mimeType: "application/pdf" },
      { responseType: "arraybuffer" }
    );

    const buffer = fileStream.data as ArrayBuffer;

    if (buffer.byteLength === 0) {
      throw new Error("Failed to retrieve resume");
    }

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": buffer.byteLength.toString(),
        "Content-Disposition": `inline; filename="John-Soto-Resume.pdf"`,
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Error fetching resume:", error);

    return new Response(JSON.stringify({ error: String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
