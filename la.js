; (_ => {
	let hc = { '<': '&lt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }
    , he = x => x.replace(/[<&'"]/g, c => hc[c]) //html chars and escape fn
    , tcs = [
        ["1", "𐄇", "1"],
        ["2", "𐄈", "2"],
        ["3", "𐄉", "3"],
        ["4", "𐄊", "4"],
        ["5", "𐄋", "5"],
        ["6", "𐄌", "6"],
        ["7", "𐄍", "7"],
        ["8", "𐄎", "8"],
        ["9", "𐄏", "9"],
        ["10", "𐄐", "10"],
        ["20", "𐄑", "20"],
        ["30", "𐄒", "30"],
        ["40", "𐄓", "40"],
        ["50", "𐄔", "50"],
        ["60", "𐄕", "60"],
        ["70", "𐄖", "70"],
        ["80", "𐄗", "80"],
        ["90", "𐄘", "90"],
        ["100", "𐄙", "100"],
        ["200", "𐄚", "200"],
        ["300", "𐄛", "300"],
        ["400", "𐄜", "400"],
        ["500", "𐄝", "500"],
        ["600", "𐄞", "600"],
        ["700", "𐄟", "700"],
        ["800", "𐄠", "800"],
        ["900", "𐄡", "900"],
        ["1000", "𐄢", "1000"],
        ["2000", "𐄣", "2000"],
        ["3000", "𐄤", "3000"],
        ["4000", "𐄥", "4000"],
        ["5000", "𐄦", "5000"],
        ["6000", "𐄧", "6000"],
        ["7000", "𐄨", "7000"],
        ["8000", "𐄩", "8000"],
        ["9000", "𐄪", "9000"],
        ["10000", "𐄫", "10000"],
        ["20000", "𐄬", "20000"],
        ["30000", "𐄭", "30000"],
        ["40000", "𐄮", "40000"],
        ["50000", "𐄯", "50000"],
        ["60000", "𐄰", "60000"],
        ["70000", "𐄱", "70000"],
        ["80000", "𐄲", "80000"],
        ["90000", "𐄳", "90000"],
        ["≈ ¹⁄₆", "𐝀", "≈ ¹⁄₆"],
        ["¹⁄₃", "𐝁", "¹⁄₃"],
        ["¹⁄₅", "𐝂", "¹⁄₅"],
        ["¹⁄₄", "𐝃", "¹⁄₄"],
        ["¹⁄₈", "𐝄", "¹⁄₈"],
        ["≈ ¹⁄₆", "𐝅", "≈ ¹⁄₆"],
        ["¹⁄₂", "𐝆", "¹⁄₂"],
        ["³⁄₄", "𐝕", "³⁄₄"],
        ["¹⁄₁₆", "𐝇", "¹⁄₁₆"],
        ["cum 𐙕", "𐝌", "cum 𐙕"],
        [".3", "𐝎", ".3"],
        ["≈ ¹⁄₄", "𐝏", "≈ ¹⁄₄"],
        ["cum 𐚥 ≈ ¹⁄₂", "𐝐", "cum 𐚥 ≈ ¹⁄₂"],
        ["OLE+U", "𐜋", "olive oil"],
        ["OLE+E", "𐜎", "olive oil"],
        ["DI", "𐘆", "DI"],
        ["TE", "𐘃", "TE"],
        ["NI", "𐘝", "figs"],
        ["JA+RU", "𐛑", "JA+RU"],
        ["VIR+[?]", "𐙇", "VIR+[?]"],
        ["OLE+KI", "𐜓", "olive oil"],
        ["PA", "𐘂", "PA"],
        ["*86+'*188'", "𐛥", "*86+'*188'"],
        ["VIN", "𐙍", "wine"],
        ["PA₃", "𐘰", "PA₃"],
        ["*301", "𐙕", "*301"],
        ["TA₂", "𐘷", "TA₂"],
        ["KA", "𐘾", "KA"],
        ["OLE+DI", "𐜉", "olive oil"],
        ["*304", "𐙘", "olive oil"],
        ["QA2+[?]+PU", "𐚻", "liquid?"],
        ["E", "𐘡", "E"],
        ["*560", "𐛢", "*560"],
        ["*118", "𐙈", "talent"],
        ["CYP+E", "𐜚", "cyperus"],
        ["QA2+[?]+PU+RE", "𐚼", "liquid?"],
        ["GRA", "𐙉", "grain"],
        ["OLE+MI", "𐜗", "olive oil"],
        ["OLIV", "𐙋", "olives"],
        ["GRA+L4+L4", "𐛹", "GRA+L4+L4"],
        ["*188", "𐙓", "*188"],
        ["WA", "𐘮", "cloth"],
        ["*188+KU", "𐜇", "*188+KU"],
        ["ZE", "𐘼", "ZE"],
        ["GRA+QE", "𐛱", "grain"],
        ["*21M", "𐘑", "ram"],
        ["GRA+L2", "𐛸", "GRA+L2"],
        ["*330+DA", "𐜣", "*330+DA"],
        ["CYP", "𐙗", "cyperus"],
        ["*308", "𐙜", "olive oil"],
        ["OLE+NE", "𐜍", "olive oil"],
        ["OLE+TU", "𐜖", "olive oil"],
        ["OLE+RI", "𐜏", "olive oil"],
        ["MI+JA+RU", "𐛚", "liquid?"],
        ["QA2+[?]+RE", "𐚹", "liquid?"],
        ["QA2+[?]+RE+PU", "𐚺", "liquid?"],
        ["SI+ME", "𐛊", "SI+ME"],
        ["*406VAS+KE", "𐜮", "*406VAS+KE"],
        ["KI+MU", "𐛖", "KI+MU"],
        ["*307", "𐙛", "*307"],
        ["*86", "𐙅", "*86"],
        ["RE", "𐘙", "RE"],
        ["VIN+WA", "𐛾", "wine"],
        ["SA", "𐘞", "flax"],
        ["SI", "𐘤", "SI"],
        ["VIN+WA", "𐛽", "wine"],
        ["OLE+TA", "𐜐", "olive oil"],
        ["*23M", "𐘖", "bull"],
        ["*410-VS", "𐚪", "*410-VS"],
        ["*815", "𐚢", "*815"],
        ["*401+*304", "𐜫", "*401+*304"],
        ["E+KA", "𐛆", "E+KA"],
        ["MI+JA+KA", "𐛜", "liquid?"],
        ["*305", "𐙙", "*305"],
        ["*341+PI", "𐜦", "*341+PI"],
        ["PA3+QE", "𐛐", "PA3+QE"],
        ["MI+JA+I", "𐛛", "liquid?"],
        ["SA+MU+KU", "𐛂", "SA+MU+KU"],
        ["PU", "𐘫", "PU"],
        ["*326", "𐙲", "*326"],
        ["A", "𐘇", "A"],
        ["*403-VS", "𐚣", "*403-VS"],
        ["AU", "𐙄", "pig"],
        ["CAP", "𐘒", "goat"],
        ["TELA+KU", "𐛎", "TELA+KU"],
        ["TELA+*312", "𐛏", "TELA+*312"],
        ["*414+A", "𐜯", "*414+A"],
        ["SI+SE", "𐛉", "SI+SE"],
        ["I", "𐘚", "I"],
        ["GRA+PA", "𐛭", "grain"],
        ["OLE+KI", "𐜒", "olive oil"],
        ["OLE+RA", "𐜑", "olive oil"],
        ["*318", "𐙪", "*318"],
        ["KU", "𐙂", "KU"],
        ["𐝫", "𐝫", "𐝫"],
        ["*370", "𐚞", "*370"],
        ["*312", "𐙢", "*312"],
        ["KI", "𐘸", "KI"],
        ["TU", "𐘹", "TU"],
        ["*OLIV+TU", "𐛺", "*OLIV+TU"],
        ["MI+JA+[ ]", "𐛙", "liquid?"],
        ["GRA+KU", "𐛲", "grain"],
        ["*330+SA", "𐜤", "*330+SA"],
        ["*79", "𐙀", "*79"],
        ["*304+[ ]", "𐜜", "*304+[ ]"],
        ["*307+*387", "𐜠", "*307+*387"],
        ["GRA+K+L", "𐛷", "grain"],
        ["GRA+B", "𐛳", "grain"],
        ["VIR+KA", "𐛧", "VIR+KA"],
        ["JU+*317+QE", "𐛕", "JU+*317+QE"],
        ["VIR+*313a", "𐛩", "VIR+*313a"],
        ["RE+SE", "𐚿", "RE+SE"],
        ["DA+RE+SE", "𐚴", "DA+RE+SE"],
        ["*406-VS", "𐚦", "*406-VS"],
        ["*343", "𐚃", "*343"],
        ["TI+A", "𐛃", "TI+A"],
        ["VIR+*313b", "𐛪", "VIR+*313b"],
        ["TA", "𐘳", "TA"],
        ["*516", "𐛀", "*516"],
        ["*327", "𐙳", "*327"],
        ["JU", "𐘶", "flour"],
        ["OLE", "𐙖", "olive oil"],
        ["DI+QE", "𐚸", "DI+QE"],
        ["WI", "𐘣", "WI"],
        ["TE+RO[", "𐚷", "TE+RO["],
        ["*332", "𐙸", "*332"],
        ["GRA+H", "𐛶", "GRA+H"],
        ["*648", "𐜧", "*648"],
        ["MA", "𐙁", "MA"],
        ["O", "𐘵", "O"],
        ["GRA+BOSm", "𐛯", "grain"],
        ["SU", "𐘲", "SU"],
        ["*306+MI", "𐜞", "*306+MI"],
        ["TI", "𐘠", "TI"],
        ["OLE+QE+DI", "𐜘", "olive oil"],
        ["*346", "𐚆", "*346"],
        ["GRA+F", "𐛵", "grain"],
        ["TWE", "𐙆", "TWE"],
        ["VIR+*313c", "𐛫", "VIR+*313c"],
        ["*904", "𐙫", "*904"],
        ["*22F", "𐘓", "she-goat"],
        ["GRA+DA", "𐛬", "grain"],
        ["I+*301", "𐛁", "I+*301"],
        ["DA", "𐘀", "DA"],
        ["RO", "𐘁", "RO"],
        ["*365", "𐚙", "*365"],
        ["*366", "𐚚", "*366"],
        ["*367", "𐚛", "*367"],
        ["*368", "𐚜", "*368"],
        ["*369", "𐚝", "*369"],
        ["CYP+D", "𐜙", "cyperus"],
        ["SE", "𐘈", "SE"],
        ["*323", "𐙯", "*323"],
        ["NE", "𐘗", "NE"],
        ["ME", "𐘋", "ME"],
        ["VIN+RA", "𐜀", "wine"],
        ["VINb+WI", "𐜂", "wine"],
        ["MU", "𐘕", "bovine"],
        ["*334", "𐙺", "*334"],
        ["*306", "𐙚", "*306"],
        ["*304+PA", "𐜝", "*304+PA"],
        ["CYP+K", "𐜛", "cyperus"],
        ["*401+RU", "𐜩", "*401+RU"],
        ["*336", "𐙼", "*336"],
        ["VIR+*307", "𐛨", "VIR+*307"],
        ["*131C", "𐙏", "vinegar"],
        ["*316+KI", "𐜡", "*316+KI"],
        ["DA+RO", "𐚳", "DA+RO"],
        ["*82", "𐙃", "*82"],
        ["*371", "𐚟", "*371"],
        ["*417-VS", "𐚱", "*417-VS"],
        ["*411-VS", "𐚫", "*411-VS"],
        ["*409-VS", "𐚩", "*409-VS"],
        ["*322", "𐙮", "*322"],
        ["GAL", "𐙔", "helmet"],
        ["*164", "𐙐", "textile?"],
        ["*301+*311", "𐜈", "*301+*311"],
        ["*337+*188", "𐜥", "*337+*188"],
        ["*86+*188", "𐛦", "*86+*188"],
        ["MI+*301", "𐛝", "liquid?"],
        ["*338", "𐙾", "boots?"],
        ["*408-VS", "𐚨", "*408-VS"],
        ["QI", "𐘏", "sheep"],
        ["SU+MI", "𐛓", "SU+MI"],
        ["RA₂", "𐘽", "RA₂"],
        ["NA", "𐘅", "NA"],
        ["VIN+TE", "𐛻", "wine"],
        ["*528", "𐛈", "*528"],
        ["GRA+E", "𐛴", "GRA+E"],
        ["*47", "𐘨", "*47"],
        ["HIDE+L", "𐜆", "HIDE+L"],
        ["HIDE+SA+L", "𐜄", "HIDE+SA+L"],
        ["HIDE+SA+B", "𐜃", "HIDE+SA+B"],
        ["HIDE+[?]", "𐙒", "hide?"],
        ["HIDE+B", "𐜅", "HIDE+B"],
        ["*413+SU", "𐜲", "*413+SU"],
        ["*412+E", "𐜰", "*412+E"],
        ["*659", "𐜱", "*659"],
        ["*405+Ω", "𐜭", "*405+Ω"],
        ["*402+A", "𐜬", "*402+A"],
        ["TI+*412VAS", "𐛄", "TI+*412VAS"],
        ["*414+[ ]", "𐜳", "*414+[ ]"],
        ["𐁁", "𐁁", "𐁁"],
        ["≈", "≈", "≈"],
        ["*316", "𐙨", "*316"],
        ["*563", "𐛣", "*563"],
        ["*418+L2", "𐜶", "*418+L2"],
        ["*339", "𐙿", "*339"],
        ["*811", "𐝮", "*811"],
        ["CAPm+KU", "𐚾", "CAPm+KU"],
        ["*21F", "𐘐", "ewe"],
        ["*22M", "𐘔", "he-goat"],
        ["*320", "𐙬", "*320"],
        ["*328", "𐙴", "*328"],
        ["JA", "𐘱", "JA"],
        ["PU₂", "𐘜", "PU₂"],
        ["*800", "𐝠", "*800"],
        ["*171", "𐙑", "fodder?"],
        ["ZO", "𐘎", "ZO"],
        ["JE", "𐘧", "3/4"],
        ["OLE+QIf", "𐜌", "olive oil"],
        ["OLE+KI+U", "𐜔", "olive oil"],
        ["OLE+KI+ME", "𐜕", "olive oil"],
        ["ZA", "𐘍", "ZA"],
        ["VIN+RA", "𐛿", "wine"],
        ["VIN+KA", "𐜁", "wine"],
        ["QI+SI", "𐚽", "QI+SI"],
        ["*131B", "𐙎", "lesser quality wine"],
        ["DU", "𐘬", "DU"],
        ["QE+GRA+PA", "𐛟", "grain"],
        ["RU", "𐘘", "RU"],
        ["*317", "𐙩", "*317"],
        ["*809", "𐝬", "*809"],
        ["MI", "𐘻", "liquid?"]
    ]
		, tc = {} //tab completions

	for (let i = 0; i < tcs.length; i++) tc[tcs[i][0]] = tcs[i][1]
	let lbh = '';
  for (let i = 0; i < tcs.length; i++) {
		lbh += '<b title="' + tcs[i][1] + '\n' + '-' + tcs[i][0] + ' <tab>' + '\n' + tcs[i][2] + '">' + tcs[i][1] + '</b>'
	}
	let d = document, el = d.createElement('div'); el.innerHTML =
		`<div class=ngn_lb><span class=ngn_x title=Close>❎</span>${lbh}</div>
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
