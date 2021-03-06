; (_ => {
	let hc = { '<': '&lt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }
    , he = x => x.replace(/[<&'"]/g, c => hc[c]) //html chars and escape fn
    , tcs = [
         ["โ ยนโโ", "๐", "โ ยนโโ"],
         ["ยนโโ", "๐", "ยนโโ"],
         ["ยนโโ", "๐", "ยนโโ"],
         ["ยนโโ", "๐", "ยนโโ"],
         ["ยนโโ", "๐", "ยนโโ"],
         ["โ ยนโโ", "๐", "โ ยนโโ"],
         ["ยนโโ", "๐", "ยนโโ"],
         ["ยนโโโ", "๐", "ยนโโโ"],
         ["cum ๐", "๐", "cum ๐"],
         ["โ ยนโโ", "๐", "โ ยนโโ"],
         ["cum ๐ฅ โ ยนโโ", "๐", "cum ๐ฅ โ ยนโโ"],
         ["A", "๐", "A"],
         ["E", "๐", "E"],
         ["I", "๐", "I"],
         ["O", "๐", "O"],
         ["U", "๐", "U"],
         ["DA", "๐", "DA"],
         ["DE", "๐", "DE"],
         ["DI", "๐", "DI"],
         ["DO", "๐", "DO"],
         ["DU", "๐", "DU"],
         ["JA", "๐", "JA"],
         ["JE", "๐", "JE"],
         ["JO", "๐", "JO"],
         ["JU", "๐", "JU"],
         ["KA", "๐", "KA"],
         ["KE", "๐", "KE"],
         ["KI", "๐", "KI"],
         ["KO", "๐", "KO"],
         ["KU", "๐", "KU"],
         ["MA", "๐", "MA"],
         ["ME", "๐", "ME"],
         ["MI", "๐", "MI"],
         ["MO", "๐", "MO"],
         ["MU", "๐", "MU"],
         ["NA", "๐", "NA"],
         ["NE", "๐", "NE"],
         ["NI", "๐", "NI"],
         ["NO", "๐", "NO"],
         ["NU", "๐", "NU"],
         ["PA", "๐", "PA"],
         ["PE", "๐", "PE"],
         ["PI", "๐ ", "PI"],
         ["PO", "๐ก", "PO"],
         ["PU", "๐ข", "PU"],
         ["QA", "๐ฃ", "QA"],
         ["QE", "๐ค", "QE"],
         ["QI", "๐ฅ", "QI"],
         ["QO", "๐ฆ", "QO"],
         ["RA", "๐จ", "RA"],
         ["RE", "๐ฉ", "RE"],
         ["RI", "๐ช", "RI"],
         ["RO", "๐ซ", "RO"],
         ["RU", "๐ฌ", "RU"],
         ["SA", "๐ญ", "SA"],
         ["SE", "๐ฎ", "SE"],
         ["SI", "๐ฏ", "SI"],
         ["SO", "๐ฐ", "SO"],
         ["SU", "๐ฑ", "SU"],
         ["TA", "๐ฒ", "TA"],
         ["TE", "๐ณ", "TE"],
         ["TI", "๐ด", "TI"],
         ["TO", "๐ต", "TO"],
         ["TU", "๐ถ", "TU"],
         ["WA", "๐ท", "WA"],
         ["WE", "๐ธ", "WE"],
         ["WI", "๐น", "WI"],
         ["WO", "๐บ", "WO"],
         ["ZA", "๐ผ", "ZA"],
         ["ZE", "๐ฝ", "ZE"],
         ["ZO", "๐ฟ", "ZO"],
         ["A2", "๐", "A2"],
         ["A3", "๐", "A3"],
         ["AU", "๐", "AU"],
         ["DWE", "๐", "DWE"],
         ["DWO", "๐", "DWO"],
         ["NWA", "๐", "NWA"],
         ["PU2", "๐", "PU2"],
         ["PTE", "๐", "PTE"],
         ["RA2", "๐", "RA2"],
         ["RA3", "๐", "RA3"],
         ["RO2", "๐", "RO2"],
         ["TA2", "๐", "TA2"],
         ["TWE", "๐", "TWE"],
         ["TWO", "๐", "TWO"],
         ["*22", "๐", "goat"],
         ["*100", "๐", "man"],
         ["*102", "๐", "woman"],
         ["*104", "๐", "deer"],
         ["*105", "๐", "equid"],
         ["*105", "๐", "mare"],
         ["*105", "๐", "stallion"],
         ["*106", "๐", "ewe"],
         ["*106", "๐", "ram"],
         ["*107", "๐", "she-goat"],
         ["*107", "๐", "he-goat"],
         ["*108", "๐", "sow"],
         ["*108", "๐", "boar"],
         ["*109", "๐", "cow"],
         ["*109", "๐", "bull"],
         ["*110", "๐ฟ", "measure subunit 3"],
         ["*111", "๐พ", "measure subunit 2"],
         ["*112", "๐ผ", "dry subunit 1"],
         ["*113", "๐ฝ", "liquid subunit 1"],
         ["*114", "๐ป", "weight subunit 4"],
         ["*115", "๐บ", "weight subunit 3"],
         ["*116", "๐น", "weight subunit 2"],
         ["*117", "๐ธ", "weight subunit 1"],
         ["*118", "๐ท", "weight base unit"],
         ["*120", "๐", "wheat"],
         ["*121", "๐", "barley"],
         ["*122", "๐", "olive"],
         ["*123", "๐", "spice"],
         ["*125", "๐", "cyperus"],
         ["*127", "๐", "fruit"],
         ["*128", "๐", "kanako"],
         ["*130", "๐", "oil"],
         ["*131", "๐", "wine"],
         ["*133", "๐", "arepa"],
         ["*135", "๐", "meri"],
         ["*140", "๐", "bronze"],
         ["*141", "๐", "gold"],
         ["*145", "๐", "wool"],
         ["*151", "๐ ", "horn"],
         ["*155VAS", "๐", "vessel"],
         ["*156", "๐ค", "turo2"],
         ["*159", "๐ง", "cloth"],
         ["*162", "๐ช", "garment"],
         ["*163", "๐ซ", "armour"],
         ["*173", "๐ต", "month"],
         ["*176", "๐ท", "tree"],
         ["*191", "๐", "helmet"],
         ["*200VAS", "๐", "vessel"],
         ["*201VAS", "๐ ", "vessel"],
         ["*202VAS", "๐ก", "vessel"],
         ["*203VAS", "๐ข", "vessel"],
         ["*204VAS", "๐ฃ", "vessel"],
         ["*205VAS", "๐ค", "vessel"],
         ["*206VAS", "๐ฅ", "vessel"],
         ["*207VAS", "๐ฆ", "vessel"],
         ["*208VAS", "๐ง", "vessel"],
         ["*209VAS", "๐จ", "vessel"],
         ["*210VAS", "๐ฉ", "vessel"],
         ["*211VAS", "๐ช", "vessel"],
         ["*212VAS", "๐ซ", "vessel"],
         ["*213VAS", "๐ฌ", "vessel"],
         ["*214VAS", "๐ญ", "vessel"],
         ["*215VAS", "๐ฎ", "vessel"],
         ["*216VAS", "๐ฏ", "vessel"],
         ["*217VAS", "๐ฐ", "vessel"],
         ["*218VAS", "๐ฑ", "vessel"],
         ["*219VAS", "๐ฒ", "vessel"],
         ["*220", "๐", "footstool"],
         ["*221VAS", "๐ณ", "vessel"],
         ["*222VAS", "๐ด", "vessel"],
         ["*225", "๐", "bathtub"],
         ["*226VAS", "๐ต", "vessel"],
         ["*227VAS", "๐ถ", "vessel"],
         ["*228VAS", "๐ท", "vessel"],
         ["*229VAS", "๐ธ", "vessel"],
         ["*230", "๐", "spear"],
         ["*231", "๐", "arrow"],
         ["*233", "๐", "sword"],
         ["*236", "๐", "inverted sword"],
         ["*240", "๐", "wheeled chariot"],
         ["*241", "๐", "chariot"],
         ["*242", "๐", "chariot frame"],
         ["*243", "๐", "wheel"],
         ["*247", "๐", "dipte"],
         ["*250VAS", "๐น", "vessel"],
         ["*254", "๐", "dart"],
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
         ["*18", "๐", "*18"],
         ["*19", "๐", "*19"],
         ["*34", "๐", "*34"],
         ["*47", "๐", "*47"],
         ["*49", "๐", "*49"],
         ["*56", "๐", "*56"],
         ["*63", "๐", "*63"],
         ["*64", "๐", "*64"],
         ["*79", "๐", "*79"],
         ["*82", "๐", "*82"],
         ["*83", "๐", "*83"],
         ["*86", "๐", "*86"],
         ["*89", "๐", "*89"],
         ["*132", "๐", "*132"],
         ["*142", "๐", "*142"],
         ["*146", "๐", "*146"],
         ["*150", "๐", "*150"],
         ["*152", "๐ก", "*152"],
         ["*153", "๐ข", "*153"],
         ["*154", "๐ฃ", "*154"],
         ["*157", "๐ฅ", "*157"],
         ["*158", "๐ฆ", "*158"],
         ["*160", "๐จ", "*160"],
         ["*161", "๐ฉ", "*161"],
         ["*164", "๐ฌ", "*164"],
         ["*165", "๐ญ", "*165"],
         ["*166", "๐ฎ", "*166"],
         ["*167", "๐ฏ", "*167"],
         ["*168", "๐ฐ", "*168"],
         ["*169", "๐ฑ", "*169"],
         ["*170", "๐ฒ", "*170"],
         ["*171", "๐ณ", "*171"],
         ["*172", "๐ด", "*172"],
         ["*174", "๐ถ", "*174"],
         ["*177", "๐ธ", "*177"],
         ["*178", "๐น", "*178"],
         ["*179", "๐บ", "*179"],
         ["*180", "๐ป", "*180"],
         ["*181", "๐ผ", "*181"],
         ["*182", "๐ฝ", "*182"],
         ["*183", "๐พ", "*183"],
         ["*184", "๐ฟ", "*184"],
         ["*185", "๐", "*185"],
         ["*189", "๐", "*189"],
         ["*190", "๐", "*190"],
         ["*232", "๐", "*232"],
         ["*234", "๐", "*234"],
         ["*245", "๐", "*245"],
         ["*246", "๐", "*246"],
         ["*248", "๐", "*248"],
         ["*249", "๐", "*249"],
         ["*251", "๐", "*251"],
         ["*252", "๐", "*252"],
         ["*253", "๐", "*253"],
         ["*255", "๐", "*255"],
         ["*256", "๐", "*256"],
         ["*257", "๐", "*257"],
         ["*258", "๐", "*258"],
         ["*259", "๐", "*259"],
         ["*305", "๐บ", "*305"],
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
