; (_ => {
	let hc = { '<': '&lt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }
    , he = x => x.replace(/[<&'"]/g, c => hc[c]) //html chars and escape fn
    , tcs = [
        ["1", "๐", "1"],
        ["2", "๐", "2"],
        ["3", "๐", "3"],
        ["4", "๐", "4"],
        ["5", "๐", "5"],
        ["6", "๐", "6"],
        ["7", "๐", "7"],
        ["8", "๐", "8"],
        ["9", "๐", "9"],
        ["10", "๐", "10"],
        ["20", "๐", "20"],
        ["30", "๐", "30"],
        ["40", "๐", "40"],
        ["50", "๐", "50"],
        ["60", "๐", "60"],
        ["70", "๐", "70"],
        ["80", "๐", "80"],
        ["90", "๐", "90"],
        ["100", "๐", "100"],
        ["200", "๐", "200"],
        ["300", "๐", "300"],
        ["400", "๐", "400"],
        ["500", "๐", "500"],
        ["600", "๐", "600"],
        ["700", "๐", "700"],
        ["800", "๐ ", "800"],
        ["900", "๐ก", "900"],
        ["1000", "๐ข", "1000"],
        ["2000", "๐ฃ", "2000"],
        ["3000", "๐ค", "3000"],
        ["4000", "๐ฅ", "4000"],
        ["5000", "๐ฆ", "5000"],
        ["6000", "๐ง", "6000"],
        ["7000", "๐จ", "7000"],
        ["8000", "๐ฉ", "8000"],
        ["9000", "๐ช", "9000"],
        ["10000", "๐ซ", "10000"],
        ["20000", "๐ฌ", "20000"],
        ["30000", "๐ญ", "30000"],
        ["40000", "๐ฎ", "40000"],
        ["50000", "๐ฏ", "50000"],
        ["60000", "๐ฐ", "60000"],
        ["70000", "๐ฑ", "70000"],
        ["80000", "๐ฒ", "80000"],
        ["90000", "๐ณ", "90000"],
        ["โ ยนโโ", "๐", "โ ยนโโ"],
        ["ยนโโ", "๐", "ยนโโ"],
        ["ยนโโ", "๐", "ยนโโ"],
        ["ยนโโ", "๐", "ยนโโ"],
        ["ยนโโ", "๐", "ยนโโ"],
        ["โ ยนโโ", "๐", "โ ยนโโ"],
        ["ยนโโ", "๐", "ยนโโ"],
        ["ยณโโ", "๐", "ยณโโ"],
        ["ยนโโโ", "๐", "ยนโโโ"],
        ["cum ๐", "๐", "cum ๐"],
        [".3", "๐", ".3"],
        ["โ ยนโโ", "๐", "โ ยนโโ"],
        ["cum ๐ฅ โ ยนโโ", "๐", "cum ๐ฅ โ ยนโโ"],
        ["OLE+U", "๐", "olive oil"],
        ["OLE+E", "๐", "olive oil"],
        ["DI", "๐", "DI"],
        ["TE", "๐", "TE"],
        ["NI", "๐", "figs"],
        ["JA+RU", "๐", "JA+RU"],
        ["VIR+[?]", "๐", "VIR+[?]"],
        ["OLE+KI", "๐", "olive oil"],
        ["PA", "๐", "PA"],
        ["*86+'*188'", "๐ฅ", "*86+'*188'"],
        ["VIN", "๐", "wine"],
        ["PAโ", "๐ฐ", "PAโ"],
        ["*301", "๐", "*301"],
        ["TAโ", "๐ท", "TAโ"],
        ["KA", "๐พ", "KA"],
        ["OLE+DI", "๐", "olive oil"],
        ["*304", "๐", "olive oil"],
        ["QA2+[?]+PU", "๐ป", "liquid?"],
        ["E", "๐ก", "E"],
        ["*560", "๐ข", "*560"],
        ["*118", "๐", "talent"],
        ["CYP+E", "๐", "cyperus"],
        ["QA2+[?]+PU+RE", "๐ผ", "liquid?"],
        ["GRA", "๐", "grain"],
        ["OLE+MI", "๐", "olive oil"],
        ["OLIV", "๐", "olives"],
        ["GRA+L4+L4", "๐น", "GRA+L4+L4"],
        ["*188", "๐", "*188"],
        ["WA", "๐ฎ", "cloth"],
        ["*188+KU", "๐", "*188+KU"],
        ["ZE", "๐ผ", "ZE"],
        ["GRA+QE", "๐ฑ", "grain"],
        ["*21M", "๐", "ram"],
        ["GRA+L2", "๐ธ", "GRA+L2"],
        ["*330+DA", "๐ฃ", "*330+DA"],
        ["CYP", "๐", "cyperus"],
        ["*308", "๐", "olive oil"],
        ["OLE+NE", "๐", "olive oil"],
        ["OLE+TU", "๐", "olive oil"],
        ["OLE+RI", "๐", "olive oil"],
        ["MI+JA+RU", "๐", "liquid?"],
        ["QA2+[?]+RE", "๐น", "liquid?"],
        ["QA2+[?]+RE+PU", "๐บ", "liquid?"],
        ["SI+ME", "๐", "SI+ME"],
        ["*406VAS+KE", "๐ฎ", "*406VAS+KE"],
        ["KI+MU", "๐", "KI+MU"],
        ["*307", "๐", "*307"],
        ["*86", "๐", "*86"],
        ["RE", "๐", "RE"],
        ["VIN+WA", "๐พ", "wine"],
        ["SA", "๐", "flax"],
        ["SI", "๐ค", "SI"],
        ["VIN+WA", "๐ฝ", "wine"],
        ["OLE+TA", "๐", "olive oil"],
        ["*23M", "๐", "bull"],
        ["*410-VS", "๐ช", "*410-VS"],
        ["*815", "๐ข", "*815"],
        ["*401+*304", "๐ซ", "*401+*304"],
        ["E+KA", "๐", "E+KA"],
        ["MI+JA+KA", "๐", "liquid?"],
        ["*305", "๐", "*305"],
        ["*341+PI", "๐ฆ", "*341+PI"],
        ["PA3+QE", "๐", "PA3+QE"],
        ["MI+JA+I", "๐", "liquid?"],
        ["SA+MU+KU", "๐", "SA+MU+KU"],
        ["PU", "๐ซ", "PU"],
        ["*326", "๐ฒ", "*326"],
        ["A", "๐", "A"],
        ["*403-VS", "๐ฃ", "*403-VS"],
        ["AU", "๐", "pig"],
        ["CAP", "๐", "goat"],
        ["TELA+KU", "๐", "TELA+KU"],
        ["TELA+*312", "๐", "TELA+*312"],
        ["*414+A", "๐ฏ", "*414+A"],
        ["SI+SE", "๐", "SI+SE"],
        ["I", "๐", "I"],
        ["GRA+PA", "๐ญ", "grain"],
        ["OLE+KI", "๐", "olive oil"],
        ["OLE+RA", "๐", "olive oil"],
        ["*318", "๐ช", "*318"],
        ["KU", "๐", "KU"],
        ["๐ซ", "๐ซ", "๐ซ"],
        ["*370", "๐", "*370"],
        ["*312", "๐ข", "*312"],
        ["KI", "๐ธ", "KI"],
        ["TU", "๐น", "TU"],
        ["*OLIV+TU", "๐บ", "*OLIV+TU"],
        ["MI+JA+[ ]", "๐", "liquid?"],
        ["GRA+KU", "๐ฒ", "grain"],
        ["*330+SA", "๐ค", "*330+SA"],
        ["*79", "๐", "*79"],
        ["*304+[ ]", "๐", "*304+[ ]"],
        ["*307+*387", "๐ ", "*307+*387"],
        ["GRA+K+L", "๐ท", "grain"],
        ["GRA+B", "๐ณ", "grain"],
        ["VIR+KA", "๐ง", "VIR+KA"],
        ["JU+*317+QE", "๐", "JU+*317+QE"],
        ["VIR+*313a", "๐ฉ", "VIR+*313a"],
        ["RE+SE", "๐ฟ", "RE+SE"],
        ["DA+RE+SE", "๐ด", "DA+RE+SE"],
        ["*406-VS", "๐ฆ", "*406-VS"],
        ["*343", "๐", "*343"],
        ["TI+A", "๐", "TI+A"],
        ["VIR+*313b", "๐ช", "VIR+*313b"],
        ["TA", "๐ณ", "TA"],
        ["*516", "๐", "*516"],
        ["*327", "๐ณ", "*327"],
        ["JU", "๐ถ", "flour"],
        ["OLE", "๐", "olive oil"],
        ["DI+QE", "๐ธ", "DI+QE"],
        ["WI", "๐ฃ", "WI"],
        ["TE+RO[", "๐ท", "TE+RO["],
        ["*332", "๐ธ", "*332"],
        ["GRA+H", "๐ถ", "GRA+H"],
        ["*648", "๐ง", "*648"],
        ["MA", "๐", "MA"],
        ["O", "๐ต", "O"],
        ["GRA+BOSm", "๐ฏ", "grain"],
        ["SU", "๐ฒ", "SU"],
        ["*306+MI", "๐", "*306+MI"],
        ["TI", "๐ ", "TI"],
        ["OLE+QE+DI", "๐", "olive oil"],
        ["*346", "๐", "*346"],
        ["GRA+F", "๐ต", "grain"],
        ["TWE", "๐", "TWE"],
        ["VIR+*313c", "๐ซ", "VIR+*313c"],
        ["*904", "๐ซ", "*904"],
        ["*22F", "๐", "she-goat"],
        ["GRA+DA", "๐ฌ", "grain"],
        ["I+*301", "๐", "I+*301"],
        ["DA", "๐", "DA"],
        ["RO", "๐", "RO"],
        ["*365", "๐", "*365"],
        ["*366", "๐", "*366"],
        ["*367", "๐", "*367"],
        ["*368", "๐", "*368"],
        ["*369", "๐", "*369"],
        ["CYP+D", "๐", "cyperus"],
        ["SE", "๐", "SE"],
        ["*323", "๐ฏ", "*323"],
        ["NE", "๐", "NE"],
        ["ME", "๐", "ME"],
        ["VIN+RA", "๐", "wine"],
        ["VINb+WI", "๐", "wine"],
        ["MU", "๐", "bovine"],
        ["*334", "๐บ", "*334"],
        ["*306", "๐", "*306"],
        ["*304+PA", "๐", "*304+PA"],
        ["CYP+K", "๐", "cyperus"],
        ["*401+RU", "๐ฉ", "*401+RU"],
        ["*336", "๐ผ", "*336"],
        ["VIR+*307", "๐จ", "VIR+*307"],
        ["*131C", "๐", "vinegar"],
        ["*316+KI", "๐ก", "*316+KI"],
        ["DA+RO", "๐ณ", "DA+RO"],
        ["*82", "๐", "*82"],
        ["*371", "๐", "*371"],
        ["*417-VS", "๐ฑ", "*417-VS"],
        ["*411-VS", "๐ซ", "*411-VS"],
        ["*409-VS", "๐ฉ", "*409-VS"],
        ["*322", "๐ฎ", "*322"],
        ["GAL", "๐", "helmet"],
        ["*164", "๐", "textile?"],
        ["*301+*311", "๐", "*301+*311"],
        ["*337+*188", "๐ฅ", "*337+*188"],
        ["*86+*188", "๐ฆ", "*86+*188"],
        ["MI+*301", "๐", "liquid?"],
        ["*338", "๐พ", "boots?"],
        ["*408-VS", "๐จ", "*408-VS"],
        ["QI", "๐", "sheep"],
        ["SU+MI", "๐", "SU+MI"],
        ["RAโ", "๐ฝ", "RAโ"],
        ["NA", "๐", "NA"],
        ["VIN+TE", "๐ป", "wine"],
        ["*528", "๐", "*528"],
        ["GRA+E", "๐ด", "GRA+E"],
        ["*47", "๐จ", "*47"],
        ["HIDE+L", "๐", "HIDE+L"],
        ["HIDE+SA+L", "๐", "HIDE+SA+L"],
        ["HIDE+SA+B", "๐", "HIDE+SA+B"],
        ["HIDE+[?]", "๐", "hide?"],
        ["HIDE+B", "๐", "HIDE+B"],
        ["*413+SU", "๐ฒ", "*413+SU"],
        ["*412+E", "๐ฐ", "*412+E"],
        ["*659", "๐ฑ", "*659"],
        ["*405+ฮฉ", "๐ญ", "*405+ฮฉ"],
        ["*402+A", "๐ฌ", "*402+A"],
        ["TI+*412VAS", "๐", "TI+*412VAS"],
        ["*414+[ ]", "๐ณ", "*414+[ ]"],
        ["๐", "๐", "๐"],
        ["โ", "โ", "โ"],
        ["*316", "๐จ", "*316"],
        ["*563", "๐ฃ", "*563"],
        ["*418+L2", "๐ถ", "*418+L2"],
        ["*339", "๐ฟ", "*339"],
        ["*811", "๐ฎ", "*811"],
        ["CAPm+KU", "๐พ", "CAPm+KU"],
        ["*21F", "๐", "ewe"],
        ["*22M", "๐", "he-goat"],
        ["*320", "๐ฌ", "*320"],
        ["*328", "๐ด", "*328"],
        ["JA", "๐ฑ", "JA"],
        ["PUโ", "๐", "PUโ"],
        ["*800", "๐ ", "*800"],
        ["*171", "๐", "fodder?"],
        ["ZO", "๐", "ZO"],
        ["JE", "๐ง", "3/4"],
        ["OLE+QIf", "๐", "olive oil"],
        ["OLE+KI+U", "๐", "olive oil"],
        ["OLE+KI+ME", "๐", "olive oil"],
        ["ZA", "๐", "ZA"],
        ["VIN+RA", "๐ฟ", "wine"],
        ["VIN+KA", "๐", "wine"],
        ["QI+SI", "๐ฝ", "QI+SI"],
        ["*131B", "๐", "lesser quality wine"],
        ["DU", "๐ฌ", "DU"],
        ["QE+GRA+PA", "๐", "grain"],
        ["RU", "๐", "RU"],
        ["*317", "๐ฉ", "*317"],
        ["*809", "๐ฌ", "*809"],
        ["MI", "๐ป", "liquid?"]
    ]
		, tc = {} //tab completions

	for (let i = 0; i < tcs.length; i++) tc[tcs[i][0]] = tcs[i][1]
	let lbh = '';
  for (let i = 0; i < tcs.length; i++) {
		lbh += '<b title="' + tcs[i][1] + '\n' + '-' + tcs[i][0] + ' <tab>' + '\n' + tcs[i][2] + '">' + tcs[i][1] + '</b>'
	}
	let d = document, el = d.createElement('div'); el.innerHTML =
		`<div class=ngn_lb><span class=ngn_x title=Close>โ</span>${lbh}</div>
  <style>
  @font-face {
    font-family: 'Noto Sans Linear A and B';
    font-style: normal;
    font-weight: 400;
    src: url(NotoSansLinearA-LinearB.ttf) format('truetype');
  }
  </style>
 <style>
  body {
    font-family: 'Arial','AegeanRegular', 'Aegean', 'Noto Sans Linear A and B', sans-serif;
  }
  .lineara_font {
    font-family: 'Arial','AegeanRegular', 'Aegean', 'Noto Sans Linear A and B', sans-serif;
  }
  .ngn_lb{position:fixed;top:0;left:0;right:0;background-color:#eee;color:#000;cursor:default;z-index:2147483647;
    font-family:"Noto Sans Linear A and B",sans-serif;border-bottom:solid #999 1px;padding:2px 2px 0 2px;word-wrap:break-word;}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:#777;color:#fff}
  .ngn_x{float:right;color:#999;cursor:pointer;margin-top:-3px}
  .ngn_x:hover{color:#f00}
 </style>`
	d.body.appendChild(el)
	let t, ts = [], lb = el.firstChild //t:textarea or input, lb:language bar
	let pd = x => x.preventDefault()
	let ev = (x, t, f, c) => x.addEventListener(t, f, c)
	ev(lb, 'mousedown', x => {
		if (x.target.classList.contains('ngn_x')) { lb.hidden = 1; upd(); pd(x); return }
		if (x.target.nodeName === 'B' && t) {
      t.classList.add("lineara_font")
			let i = t.selectionStart, j = t.selectionEnd, v = t.value, s = x.target.textContent
      let l = s.length;
			if (i != null && j != null) { t.value = v.slice(0, i) + s + v.slice(j); t.selectionStart = t.selectionEnd = i + l }
			pd(x); return
		}
	})
	let fk = x => {
		let t = x.target
		if (!x.ctrlKey && !x.shiftKey && !x.altKey && !x.metaKey) {
			if (x.key == "Tab") {
        t.classList.add("lineara_font")
				let i = t.selectionStart, v = t.value, gs = v.lastIndexOf('-'), c = tc[v.slice(gs+1, i).toUpperCase()]  
				if (c) { t.value = v.slice(0, gs) + c + v.slice(i); t.selectionStart = t.selectionEnd = i - 1; pd(x) }
			}
		}
	}
	let ff = x => {
		let t0 = x.target, nn = t0.nodeName.toLowerCase()
		if (nn !== 'textarea' && (nn !== 'input' || t0.type !== 'text' && t0.type !== 'search')) return
		t = t0; if (!t.ngn) { t.ngn = 1; ts.push(t); ev(t, 'keydown', fk) }
	}
	let upd = _ => { d.body.style.marginTop = (lb.clientHeight + 20) + 'px' }
	upd(); ev(window, 'resize', upd)
	ev(d, 'focus', ff, !0); let ae = d.activeElement; ae && ff({ type: 'focus', target: ae })
})();
