import cron, { ScheduledTask } from 'node-cron';

export const initKeepAliveCron = (): ScheduledTask => {
  // Schedule cron job to run every 14th minute: */14 * * * *
  const task = cron.schedule('*/14 * * * *', () => {
    const timeString = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    console.log(`⏰ [CRON 14-MIN HEARTBEAT]: wake up server - ${timeString}`);
  });

  console.log('⏰ Server keep-alive cron job initialized (Scheduled for every 14 minutes).');
  return task;
};
