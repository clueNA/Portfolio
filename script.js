document.addEventListener("DOMContentLoaded", function() {
    const text = "Hey World, I'm Rupanshu!";
    const speed = 100; 
    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            document.getElementById("typewriter-text").textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, speed);
        } else {
            // Wait 5 seconds before starting over
            setTimeout(reset, 5000);
        }
    }

    function reset() {
        document.getElementById("typewriter-text").textContent = "";
        charIndex = 0;
        type();
    }

    type();
}); 