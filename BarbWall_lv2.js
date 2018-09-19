(() => {
    try {
        let test = new Error();
        console.log(test.stack.split('\n'));

        if (window.location.href.indexOf("am_farm") < 0) {
            alert('Run this on the Loot Assistant page!');
        }
        console.log('Extracting village info');

        $('#inner-border tbody tr[id^="village_"]')
            .filter((i, el) => $(el).find(":nth-child(7)").html() > 0)
            .slice(0, 30)
            .each((i, el) => {
                console.log('Found village ', el);
                var cv = /village=(\w+)/.exec(window.location.href)[1];
                var bv = /village_(\w+)/.exec(el.id)[1];
                var rp = `/game.php?village=${cv}&screen=place&target=${bv}`;
                console.log('Opening ' + rp);
                setTimeout(() => window.open(rp, '_blank'), i * 750)
            });
        
        $('#plunder_list')
            .find('tr')
            .filter((i, el) => $(el).attr('name'))
            .each((i, el) => {
                var wallLevel = $($(el).find('td')[7]).text();
                if (wallLevel != 2) {
                    return;
                }

                var id = $(el).attr('name');
                console.log('Found village ' + id);

                var cv = /village=(\w+)/.exec(window.location.href)[1];
                var rp = `/game.php?village=${cv}&screen=place&target=${id}`;
                console.log('Opening ' + rp);
                setTimeout(() => window.open(rp, '_blank'), i * 250);
            })
        
    } catch (e) {
        console.log(e);
    }
})();
