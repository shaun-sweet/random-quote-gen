var quotes = [
    "We don’t give two short and curlies what it looks like.",
    "They seemed nice enough, but I was ready to go. We just got here, but, damn, it was time to go. When I told them about DC, a wink and a nod from the head asshole in charge they pulled their guns and it was right back to our regularly scheduled shit storm.",
    "He tells me I’m wrong, I listen.",
    "Damn right, that’s my girl. Maybe I’ll let you shave me down all over, dolphin-smooth.",
    "You got a shit storm behind door A and a storm of shit behind door B. If you’re lucky, it’s walkers or a shot-up truck. But sooner or later you get cornered. You wind up stayin’ and you wind up killin’. We don’t go back, we can’t go back.",
    "I am a large man, and I have had many beers to make up for that.",
    "loose ends make my ass itch.",
    "Son of a dick!"
    
];
$(document).ready(function () {
       $('.next-quote').on('mousedown', function (e) {
            $(this).css({
               "box-shadow": "inset -3px 0px 3px rgba(0,0,0,0.5)"
            });
        })
       $('.next-quote').on('click', function (e) {
           e.preventDefault();
           $(this).css({
               "box-shadow":  "-4px 5px 4px rgba(0, 0, 0, 0.5)"  
            });
           $(".quotes").html(quotes[Math.floor(Math.random()*quotes.length)]);
   })
});