import amqp from "amqplib";

export const connnectRabbit = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");

    const channel = await connection.createChannel();

    return channel;
  } catch (error) {
    console.log("error", error);
  }
};

export const produce = async (
  queue: string,
  channel: amqp.Channel,
  message: string
) => {
  try {
    await channel.assertQueue(queue, { durable: false });

    channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    console.log(" [x] Sent '%s'", message);

    // await channel.close();
  } catch (error) {
    console.warn(error);
  }
};
