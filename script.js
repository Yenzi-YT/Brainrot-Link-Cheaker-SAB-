function checkLink() {
    const link = document.getElementById("psInput").value.trim();
    const resultBox = document.getElementById("resultBox");

    // Reset output
    resultBox.style.display = "block";
    resultBox.innerHTML = "";

    // Roblox private server pattern
    const psPattern = /^https:\/\/www\.roblox\.com\/games\/(\d+)\/[A-Za-z0-9-%]+(\?privateServerLinkCode=.+)$/;

    if (!link.startsWith("https://")) {
        resultBox.innerHTML = "<span class='bad'>❌ Invalid: Link must start with https://</span>";
        return;
    }

    const match = link.match(psPattern);

    if (!match) {
        resultBox.innerHTML = "<span class='bad'>❌ This is NOT a valid Roblox private server link.</span>";
        return;
    }

    const placeId = match[1];

    // Known Steal a Brainrot place IDs
    const brainrotIds = [
        "18565514985",
        "18475567496"
    ];

    let isBrainrot = brainrotIds.includes(placeId);

    // Output results
    resultBox.innerHTML += "<span class='good'>✅ Valid Roblox Private Server Link</span><br><br>";
    resultBox.innerHTML += "• Place ID: <b>" + placeId + "</b><br>";

    if (isBrainrot) {
        resultBox.innerHTML += "• Game: <span class='good'>Steal a Brainrot ✔</span><br>";
    } else {
        resultBox.innerHTML += "• Game: <span class='bad'>NOT Steal a Brainrot</span><br>";
    }

    resultBox.innerHTML += "<br><span class='warn'>⚠ This tool cannot detect players inside the server. Roblox blocks this without an in-game script.</span>";
}
