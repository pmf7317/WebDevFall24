function generate() {
    var name = document.getElementById("visitorName").value;
    var hwords = [
        "ahi: fire",
        "ahiahi: evening",
        "akamai: smart, clever, expert",
        "alakaʻi: to lead, guide, direct",
        "alanui: street, road, highway",
        "alapiʻi: stairs",
        "alaula: light of early dawn, sunset glow",
        "aliʻi: chief",
        "alo: face",
        "aloha: love, hello, goodbye",
        "anuanu: cold, chilly",
        "ānuenue: rainbow",
        "ao: light, dawn, cloud",
        "apolima: bracelet",
        "awāwa: valley, gulch, ravine",
        "hae: flag",
        "hāhālua: manta ray",
        "haʻahaʻa: humble, modest, meek",
        "haʻaheo: proud",
        "hāʻawi: to give, grant",
        "haʻi: to tell, declare; to break or snap",
        "haʻiʻōlelo:  speech, address, lecture",
        "hāiki: narrow, pinched",
        "hainakā: handkerchief, napkin",
        "hālau: long house, as for canoes or hula instruction; meeting house",
        "hālāwai: meeting; to meet",
        "hale: house, building",
        "halihali: to transport, transmit",
        "hāliʻi: a covering; to spread",
        "hana: work, to work",
        "hānai: feed, raise, adopt",
        "hānau: to give birth; born",
        "hanohano: glorious, magnificent, noble",
        "hāpai: to carry, lift, elevate; pregnant",
        "hauʻoli: happy"
    ];

    if (name.trim() === "") {
        alert("Please enter your name to get a Hawaiian word.");
        return;
    }

    var randomHwords = hwords[Math.floor(Math.random() * hwords.length)];
    var outputElement = document.getElementById("output");
    outputElement.textContent = `${name}, your Hawaiian word is: [ ${randomHwords} ]`;

    restyle(outputElement);
}

function restyle(element) {
    var colors = ["#e63946", "#457b9d", "#1d3557", "#6a0572", "#028090"];
    var fonts = ["Verdana, sans-serif", "Courier New, monospace", "Georgia, serif", "Tahoma, sans-serif"];
    var fontSizes = ["24px", "26px", "28px", "30px", "32px"];

    element.style.color = colors[Math.floor(Math.random() * colors.length)];
    element.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    element.style.fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
}
