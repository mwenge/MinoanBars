; (_ => {
	let hc = { '<': '&lt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }
    , he = x => x.replace(/[<&'"]/g, c => hc[c]) //html chars and escape fn
    , tcs = [
         ["≈ ¹⁄₆", "𐝀", "≈ ¹⁄₆"],
         ["¹⁄₃", "𐝁", "¹⁄₃"],
         ["¹⁄₅", "𐝂", "¹⁄₅"],
         ["¹⁄₄", "𐝃", "¹⁄₄"],
         ["¹⁄₈", "𐝄", "¹⁄₈"],
         ["≈ ¹⁄₆", "𐝅", "≈ ¹⁄₆"],
         ["¹⁄₂", "𐝆", "¹⁄₂"],
         ["¹⁄₁₆", "𐝇", "¹⁄₁₆"],
         ["cum 𐙕", "𐝌", "cum 𐙕"],
         ["≈ ¹⁄₄", "𐝏", "≈ ¹⁄₄"],
         ["cum 𐚥 ≈ ¹⁄₂", "𐝐", "cum 𐚥 ≈ ¹⁄₂"],
         ["A", "𐀀", "A"],
         ["E", "𐀁", "E"],
         ["I", "𐀂", "I"],
         ["O", "𐀃", "O"],
         ["U", "𐀄", "U"],
         ["DA", "𐀅", "DA"],
         ["DE", "𐀆", "DE"],
         ["DI", "𐀇", "DI"],
         ["DO", "𐀈", "DO"],
         ["DU", "𐀉", "DU"],
         ["JA", "𐀊", "JA"],
         ["JE", "𐀋", "JE"],
         ["JO", "𐀍", "JO"],
         ["JU", "𐀎", "JU"],
         ["KA", "𐀏", "KA"],
         ["KE", "𐀐", "KE"],
         ["KI", "𐀑", "KI"],
         ["KO", "𐀒", "KO"],
         ["KU", "𐀓", "KU"],
         ["MA", "𐀔", "MA"],
         ["ME", "𐀕", "ME"],
         ["MI", "𐀖", "MI"],
         ["MO", "𐀗", "MO"],
         ["MU", "𐀘", "MU"],
         ["NA", "𐀙", "NA"],
         ["NE", "𐀚", "NE"],
         ["NI", "𐀛", "NI"],
         ["NO", "𐀜", "NO"],
         ["NU", "𐀝", "NU"],
         ["PA", "𐀞", "PA"],
         ["PE", "𐀟", "PE"],
         ["PI", "𐀠", "PI"],
         ["PO", "𐀡", "PO"],
         ["PU", "𐀢", "PU"],
         ["QA", "𐀣", "QA"],
         ["QE", "𐀤", "QE"],
         ["QI", "𐀥", "QI"],
         ["QO", "𐀦", "QO"],
         ["RA", "𐀨", "RA"],
         ["RE", "𐀩", "RE"],
         ["RI", "𐀪", "RI"],
         ["RO", "𐀫", "RO"],
         ["RU", "𐀬", "RU"],
         ["SA", "𐀭", "SA"],
         ["SE", "𐀮", "SE"],
         ["SI", "𐀯", "SI"],
         ["SO", "𐀰", "SO"],
         ["SU", "𐀱", "SU"],
         ["TA", "𐀲", "TA"],
         ["TE", "𐀳", "TE"],
         ["TI", "𐀴", "TI"],
         ["TO", "𐀵", "TO"],
         ["TU", "𐀶", "TU"],
         ["WA", "𐀷", "WA"],
         ["WE", "𐀸", "WE"],
         ["WI", "𐀹", "WI"],
         ["WO", "𐀺", "WO"],
         ["ZA", "𐀼", "ZA"],
         ["ZE", "𐀽", "ZE"],
         ["ZO", "𐀿", "ZO"],
         ["A2", "𐁀", "A2"],
         ["A3", "𐁁", "A3"],
         ["AU", "𐁂", "AU"],
         ["DWE", "𐁃", "DWE"],
         ["DWO", "𐁄", "DWO"],
         ["NWA", "𐁅", "NWA"],
         ["PU2", "𐁆", "PU2"],
         ["PTE", "𐁇", "PTE"],
         ["RA2", "𐁈", "RA2"],
         ["RA3", "𐁉", "RA3"],
         ["RO2", "𐁊", "RO2"],
         ["TA2", "𐁋", "TA2"],
         ["TWE", "𐁌", "TWE"],
         ["TWO", "𐁍", "TWO"],
         ["*22", "𐁒", "goat"],
         ["*100", "𐂀", "man"],
         ["*102", "𐂁", "woman"],
         ["*104", "𐂂", "deer"],
         ["*105", "𐂃", "equid"],
         ["*105", "𐂄", "mare"],
         ["*105", "𐂅", "stallion"],
         ["*106", "𐂆", "ewe"],
         ["*106", "𐂇", "ram"],
         ["*107", "𐂈", "she-goat"],
         ["*107", "𐂉", "he-goat"],
         ["*108", "𐂊", "sow"],
         ["*108", "𐂋", "boar"],
         ["*109", "𐂌", "cow"],
         ["*109", "𐂍", "bull"],
         ["*110", "𐄿", "measure subunit 3"],
         ["*111", "𐄾", "measure subunit 2"],
         ["*112", "𐄼", "dry subunit 1"],
         ["*113", "𐄽", "liquid subunit 1"],
         ["*114", "𐄻", "weight subunit 4"],
         ["*115", "𐄺", "weight subunit 3"],
         ["*116", "𐄹", "weight subunit 2"],
         ["*117", "𐄸", "weight subunit 1"],
         ["*118", "𐄷", "weight base unit"],
         ["*120", "𐂎", "wheat"],
         ["*121", "𐂏", "barley"],
         ["*122", "𐂐", "olive"],
         ["*123", "𐂑", "spice"],
         ["*125", "𐂒", "cyperus"],
         ["*127", "𐂓", "fruit"],
         ["*128", "𐂔", "kanako"],
         ["*130", "𐂕", "oil"],
         ["*131", "𐂖", "wine"],
         ["*133", "𐂘", "arepa"],
         ["*135", "𐂙", "meri"],
         ["*140", "𐂚", "bronze"],
         ["*141", "𐂛", "gold"],
         ["*145", "𐂝", "wool"],
         ["*151", "𐂠", "horn"],
         ["*155VAS", "𐃞", "vessel"],
         ["*156", "𐂤", "turo2"],
         ["*159", "𐂧", "cloth"],
         ["*162", "𐂪", "garment"],
         ["*163", "𐂫", "armour"],
         ["*173", "𐂵", "month"],
         ["*176", "𐂷", "tree"],
         ["*191", "𐃃", "helmet"],
         ["*200VAS", "𐃟", "vessel"],
         ["*201VAS", "𐃠", "vessel"],
         ["*202VAS", "𐃡", "vessel"],
         ["*203VAS", "𐃢", "vessel"],
         ["*204VAS", "𐃣", "vessel"],
         ["*205VAS", "𐃤", "vessel"],
         ["*206VAS", "𐃥", "vessel"],
         ["*207VAS", "𐃦", "vessel"],
         ["*208VAS", "𐃧", "vessel"],
         ["*209VAS", "𐃨", "vessel"],
         ["*210VAS", "𐃩", "vessel"],
         ["*211VAS", "𐃪", "vessel"],
         ["*212VAS", "𐃫", "vessel"],
         ["*213VAS", "𐃬", "vessel"],
         ["*214VAS", "𐃭", "vessel"],
         ["*215VAS", "𐃮", "vessel"],
         ["*216VAS", "𐃯", "vessel"],
         ["*217VAS", "𐃰", "vessel"],
         ["*218VAS", "𐃱", "vessel"],
         ["*219VAS", "𐃲", "vessel"],
         ["*220", "𐃄", "footstool"],
         ["*221VAS", "𐃳", "vessel"],
         ["*222VAS", "𐃴", "vessel"],
         ["*225", "𐃅", "bathtub"],
         ["*226VAS", "𐃵", "vessel"],
         ["*227VAS", "𐃶", "vessel"],
         ["*228VAS", "𐃷", "vessel"],
         ["*229VAS", "𐃸", "vessel"],
         ["*230", "𐃆", "spear"],
         ["*231", "𐃇", "arrow"],
         ["*233", "𐃉", "sword"],
         ["*236", "𐃋", "inverted sword"],
         ["*240", "𐃌", "wheeled chariot"],
         ["*241", "𐃍", "chariot"],
         ["*242", "𐃎", "chariot frame"],
         ["*243", "𐃏", "wheel"],
         ["*247", "𐃒", "dipte"],
         ["*250VAS", "𐃹", "vessel"],
         ["*254", "𐃘", "dart"],
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
         ["*18", "𐁐", "*18"],
         ["*19", "𐁑", "*19"],
         ["*34", "𐁓", "*34"],
         ["*47", "𐁔", "*47"],
         ["*49", "𐁕", "*49"],
         ["*56", "𐁖", "*56"],
         ["*63", "𐁗", "*63"],
         ["*64", "𐁘", "*64"],
         ["*79", "𐁙", "*79"],
         ["*82", "𐁚", "*82"],
         ["*83", "𐁛", "*83"],
         ["*86", "𐁜", "*86"],
         ["*89", "𐁝", "*89"],
         ["*132", "𐂗", "*132"],
         ["*142", "𐂜", "*142"],
         ["*146", "𐂞", "*146"],
         ["*150", "𐂟", "*150"],
         ["*152", "𐂡", "*152"],
         ["*153", "𐂢", "*153"],
         ["*154", "𐂣", "*154"],
         ["*157", "𐂥", "*157"],
         ["*158", "𐂦", "*158"],
         ["*160", "𐂨", "*160"],
         ["*161", "𐂩", "*161"],
         ["*164", "𐂬", "*164"],
         ["*165", "𐂭", "*165"],
         ["*166", "𐂮", "*166"],
         ["*167", "𐂯", "*167"],
         ["*168", "𐂰", "*168"],
         ["*169", "𐂱", "*169"],
         ["*170", "𐂲", "*170"],
         ["*171", "𐂳", "*171"],
         ["*172", "𐂴", "*172"],
         ["*174", "𐂶", "*174"],
         ["*177", "𐂸", "*177"],
         ["*178", "𐂹", "*178"],
         ["*179", "𐂺", "*179"],
         ["*180", "𐂻", "*180"],
         ["*181", "𐂼", "*181"],
         ["*182", "𐂽", "*182"],
         ["*183", "𐂾", "*183"],
         ["*184", "𐂿", "*184"],
         ["*185", "𐃀", "*185"],
         ["*189", "𐃁", "*189"],
         ["*190", "𐃂", "*190"],
         ["*232", "𐃈", "*232"],
         ["*234", "𐃊", "*234"],
         ["*245", "𐃐", "*245"],
         ["*246", "𐃑", "*246"],
         ["*248", "𐃓", "*248"],
         ["*249", "𐃔", "*249"],
         ["*251", "𐃕", "*251"],
         ["*252", "𐃖", "*252"],
         ["*253", "𐃗", "*253"],
         ["*255", "𐃙", "*255"],
         ["*256", "𐃚", "*256"],
         ["*257", "𐃛", "*257"],
         ["*258", "𐃜", "*258"],
         ["*259", "𐃝", "*259"],
         ["*305", "𐃺", "*305"],
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
