import { NextRequest, NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";

//req is short for request
export async function GET(req: NextRequest) {
  // replace the value below with the Telegram token you receive from @BotFather
  const token = "7621484908:AAHVvPxEK6y5_klTQGV2Uy93VTgcj9My8ls";

  // Create a bot that uses 'polling' to fetch new updates
  const bot = new TelegramBot(token, { polling: true });
  bot.on("message", (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, "this is a Received your message");
  });

  return NextResponse.json(
    { message: "this is a get a request" },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  return NextResponse.json(
    { message: "This is a post request" },
    { status: 200 }
  );
}

export async function PATCH(req: NextRequest) {
  return NextResponse.json(
    { message: "This is a patch request" },
    { status: 200 }
  );
}
