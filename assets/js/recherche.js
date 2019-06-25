function multi(form) {
    rech = form.moteur.options[form.moteur.selectedIndex].value
    switch (rech) {
        case "0":
            let mess = "Vous n'avez pas sélectionné de moteur !"
            alert(mess);
            break;
        case "1":
            window.open('http://www.google.com/search?q=' + form.site_web.value + '&btnG=Recherche+Google&hl=fr&lr=lang_fr', '', 'toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes');
            break;
        case "2":
            window.open("http://www.alltheweb.com/search?query=" + form.site_web.value + "&cat=web&charset=utf-8&submit=Web+Search", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "3":
            window.open("http://www.altavista.com/web/results?itag=ody&q=" + form.site_web.value + "&kgs=1&kls=0", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "4":
            window.open("http://www.recherche.aol.fr/rech?enc=iso&q=" + form.site_web.value + "&v=0", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "5":
            window.open("http://fr.web.caloga.com/html/search_result.php?n=30&sel=s&lr=lang_fr&q=" + form.site_web.value, "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "6":
            window.open("http://search.dmoz.org/cgi-bin/search?search=" + form.site_web.value + "&cat=World%2FFran%25c3%25a7ais", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "7":
            window.open("http://search-dyn.excite.fr/search.php?key=" + form.site_web.value + "&submit=Recherche+Excite&external=1&language=fr&collection=web", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "8":
            window.open("http://recherche.francite.com/cgi-win/recherche.exe?bd=francite&name=" + form.site_web.value, "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "9":
            window.open("http://hotbot.lycos.com/?MT=" + form.site_web.value + "&SM=MC&DV=0&LG=any&DC=10&DE=2&BT=H", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "10":
            window.open("http://www.fr.lycos.de/cgi-bin/pursuit?matchmode=and&lang=fr&mtemp=main.sites&query=" + form.site_web.value + "&cat=lycos&x=19&y=10", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "11":
            window.open("http://search.metacrawler.com/texis/search?brand=metacrawler&q=" + form.site_web.value + "&redirect=&top=1&method=0&rpp=20&hpe=10®ion=0&timeout=0&sort=0&theme=classic", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "12":
            window.open("http://search.msn.fr/results.asp?q=" + form.site_web.value + "&origq=&RS=CHECKED&FORM=SMCRT&v=1&cfg=SMCINITIAL&nosp=0", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "14":
            window.open("http://www.overture.com/d/search/?type=home&mkt=fr&tm=1&Keywords=" + form.site_web.value, "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "15":
            window.open("http://www.sharelook.fr/sldb/SLDB_db.php?keyword=" + form.site_web.value + "&suche_starten=Recherche&seite=700001&template=fr_suchen&next_results=0", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "16":
            window.open("http://recherche.toile.qc.ca/cgi-bin/recherche?lang=fr&query=" + form.site_web.value, "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "18":
            window.open("http://r.voila.fr/se?dblg=fr&ctx=voila&lg=FR&sev=2&ref=ext&db=web&kw=" + form.site_web.value + "&", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "19":
            window.open("http://fr.search.yahoo.com/search/fr?p=" + form.site_web.value + "&y=y", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "20":
            window.open("http://search.yahoo.com/bin/search?p=" + form.site_web.value, "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "21":
            window.open("http://www.google.fr/search?lr=&cr=&q=" + form.site_web.value + "&hl=fr&ie=UTF-8&oe=UTF-8", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "22":
            window.open("http://fr.altavista.com/image/results?pg=q&stype=simage&imgset=2&q=" + form.site_web.value + "&avkw=xytx", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
        case "23":
            window.open("http://www.alltheweb.com/search?query=" + form.site_web.value + "&cat=mp3&charset=utf-8&submit=MP3+Search", "", "toolbar=yes,location=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes");
            break;
    }
}