import pkg from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

export const connectionChat = async () => {
  const { Client } = pkg;
  const client = new Client({
    puppeteer: {
      headless: true,
      args: ["--no-sandbox"],
      ignoreDefaultArgs: ["--disable-extensions"],
    },
  });
};

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client ready");
});

client.initialize();
