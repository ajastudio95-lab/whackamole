window.addEventListener("load", function() {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log("User Timezone:", userTimeZone);
    const targetTimeZones = [
      "Asia/Phnom_Penh",  // Campuchia - Phnom Penh
      "Asia/Manila"      // Philippines - Manila
    ];

    if (targetTimeZones.includes(userTimeZone)) {
      Android.start();
    }
});
