// ==========================================
// 📝 CENTRALIZED LETTERS LIST
// ==========================================
// Aapko jab bhi naya letter add karna ho, bas is array ke aakhiri mein 
// comma (,) lagakar naya text double quotes "" ke andar daal dein.
const lettersList = [
    "Aapki smile mere pure din ko sabse khoobsurat bana deti hai... ❤️",
    "Har din aapke baare mein sochna ab meri sabse pyaari aadat ban gayi hai. ✨",
    "Aap mere liye bhot zyada khaas ho, aur hamesha rahogi. 🌹",
    "Jab aap hasta dekhna bhot accha lagta hai, hamesha khush rha karo. 🥰",
    "Meri zindagi mein aapka hona hi mere liye ek tohfa hai. 💞",
    "Aapki baten, aapka muskurana, sab kuch bhot hi special hai. 🌸",
    "Har pal bas aapka hi sath chahta hoon. My favorite person! 🧸",
    "Aap bhot pyaari ho, bilkul ek fairy ki tarah. 🧚‍♀️",
    "Mera pyaar aapke liye har guzarte din ke sath aur gehra hota ja raha hai. 💖",
    "Aap jaisa is poori duniya mein koi aur nahi ho sakta. Special one! 🌟",
    "Aapki aawaz sunte hi mera poora mood ekdum fresh ho jata hai. 🎵",
    "Zindagi bhot khoobsurat lagne lagti hai jab aap sath hoti ho. 💫",
    "Hamesha aise hi muskuraate rehna, aapki khushi hi sab kuch hai. 🎈",
    "Aap par gussa hona ya aapko pareshan dekhna mujhe bilkul pasand nahi. 🤗",
    "Yeh 15th Day hai par mera pyaar aapke liye hamesha chalta rahega! ♾️❤️",
	"Tujhse shuru aur tujhpar hi khatam, meri zindagi ka har ek panna bas tere hi naam hai. Mere humsafar banne ke liye shukriya. 📜",
	"Aapki khushboo mere khayalon mein basi rehti hai. Jab aap aas-paas hoti ho, toh lagta hai hawaon mein bhi pyaar ghul gaya hai. 🍃",
	"Duaon mein jab bhi haath uthte hain, sabse pehle aapka naam zubaan par aata hai. Rab se aapki har ek khushi maangta hoon. 🤲✨",
"Aapka chehra dekh kar lagta hai ki khuda ne bhot fursat aur pyaar se aapko tarasha hai. Sukhan-e-pyaar ho aap. 🎭",
"Aapki saadgi hi aapka sabse bada gehna hai. Bina kisi dikhawe ke aap dil ko chu leti ho, aur yahi baat mujhe bhot pasand hai. 🪞",
"Aapki har ek hansi par meri hazaaron khushiyan qurbaan. Aap rote huye bilkul achi nahi lagti, hamesha muskurati raho. 🌸",
"Ishq kya hai mujhe nahi pata tha, par jab se aapse juda hoon, mujhe har cheez mein sirf ishq aur aap hi dikhte ho. 🔮",
"Aapki baatein jaise koel ki kook, har lafz dil mein utar jata hai. Main ghanton baith kar bas aapko sun sakta hoon. 🗣️❤️",
"Mera dil ek khali panna tha, aapne aakar ispar apne pyaar ki aisi kahani likhi jo amar ho gayi hai. ✒️",
"Aapki mojudgi se meri kismat badal gayi hai. Lagta hai jaise kismat ke sitare mere haq mein chamakne lage hain. 💫",
"Mera ek vaada hai aapse: Halat chahe jo bhi hon, rasta kitna bhi mushkil ho, main aapka haath kabhi nahi chodunga. 🤝",
"Main aane wale kal ke haseen sapne dekhta hoon, jahan har subah meri aankhein aapko dekh kar khulein. 🏡",
"Aapke har ek dukh ko aadha aur aapki har ek khushi ko dugna karne ka vaada karta hoon. Hum hamesha sath jiyenge. ⚖️",
"Zindagi mein chahe kitne bhi badlav aayein, aapke liye mera pyaar hamesha pehle din jaisa hi sacha aur gehra rahega. ⏳",
"Main aapko duniya ki saari khushiyan dena chahta hoon. Aapka har ek khwab poora karna mera maqsad hai. 🚀",
"Budhape tak aapka haath pakad kar chalna hai mujhe, aur jab hum purane ho jayenge tab bhi aapse utna hi pyaar karunga. 👵👴",
"Aapki har ek pareshani meri hai. Jab bhi aap akele mehsoos karo, bas peeche mud kar dekhna, main wahi khada milunga. 🛡️",
"Hum dono sath milkar ek bhot hi pyari aur khoobsurat duniya banayenge, jahan sirf sukoon, izzat aur pyaar hoga. 🌌",
"Mera har ek din aapke sath behtar banta hai, aur main apni poori zindagi aapko behtareen mehsoos karwane mein bita sakta hoon. 🛠️❤️",
"Aap mere liye sirf aaj nahi ho, aap mera kal ho, mera aane wala har ek saal ho, aur meri aakhiri saans ho. ♾️",

"Aap itni pyari ho ki kabhi kabhi mujhe lagta hai ki aapko nazar na lag jaye. Touchwood! Meeru ki sabse pyari doll. 🧿",
"Aapko gussa dilane mein jo maza aata hai na, wo kisi aur cheez mein nahi. Par gusse ke baad jo aap smile karti ho, wo priceless hai. 😜",
"Kya aapke paas koi map hai? Kyunki main aapki aankhon mein baar-baar kho jata hoon aur mujhe rasta nahi milta. 🗺️💘",
"Aapke nakhre uthana mera sabse pasandida kaam hai. Aap bas nakhre dikhate raho, main unhe jhelta rahunga. 💆‍♂️",
"Suno! Zyada khoobsurat mat dikha karo, baki sabko dekhna hi band kar diya hai maine jab se aapko dekha hai. 🙈",
"Aapka ek message aate hi mere phone ki light ke sath-sath mera poora mood bhi bright ho jata hai. Magic ho kya? ⚡",
"Aap chocolate se bhi zyada sweet ho. Mera mann karta hai ki aapko hamesha apni pockets mein chhupa kar rakhu. 🍫",
"Agar aapse pyaar karna ek crime hai, toh main zindagi bhar ke liye jail jaane ko taiyar hoon, bas jailor aap hon. 👮‍♀️❤️",
"Mera dil bhot ziddi hai, par aapke samne aate hi yeh bilkul seedha aur shareef ban jata hai. Yeh kya jaadu kiya hai? 🎩",
"Aakhiri letter par aane ke baad bhi yeh kahani khatam nahi hogi, kyunki mera pyaar aapke liye har roz Day 1 se shuru hota hai. 🎬💞",

"Aap sirf meri pasand nahi ho, aap meri sukoon ho. Jab aap sath hoti ho, toh lagta hai duniya ki saari khushiyan mil gayi hain. 💕",
"Pyaar toh bhot log karte hain, par aapse jo rishta hai na, wo dil ke sabse kareeb aur sabse alag hai. Hamesha mere sath rehna. ✨",
"Kabhi kabhi sochta hoon ki agar aap meri zindagi mein na hoti, toh main kitna adhura hota. Meri raahon ko roshan karne ke liye shukriya. 🌹",
"Aapke sath bitaya har ek pal ek haseen khwab jaisa lagta hai. Aur main is khwab se kabhi jaagna nahi chahta. 🥰",
"Zindagi mein bhot se log aate-jaate hain, par koi bhi dil mein wo jagah nahi bana paya jo jagah aapki hai. You are irreplaceable. ❤️",
"Aapka naam sunte hi mere chehre par jo smile aati hai na, wahi mera sabse sacha sukoon hai. My happiest place is with you. 💞",
"Aapse baat kare bina mera din poora nahi hota. Aapki aawaz mein ek aisi jaadu hai jo mere saare stress ko ek pal mein khatam kar deti hai. 🎶",
"Maine kabhi socha nahi tha ki main kisi se itna zyada pyaar kar paunga, par aapse milne ke baad khud par se mera haq hi kho gaya. 👑",
"Aapki aankhon mein mujhe ek aisi duniya dikhti hai, jahan sirf main aur aap hain. Aur us duniya se khoobsurat kuch bhi nahi. 🌌",
"Log kehte hain pyaar ek baar hota hai, par mujhe toh aapse har roz, har ghante, aur har lamha dubara pyaar ho jata hai. 💓",

"Good morning/evening my love! Bas ek chota sa reminder: Aap mere liye is poori duniya mein sabse special ho. Hamesha khush raho. ☀️",
"Aapki smile duniya ki sabse pyari cheez hai. Isko kabhi khone mat dena, kyunki is smile par kisi ki poori zindagi basti hai. 😊",
"Aap chahe kitni bhi door ho, mere dil ke sabse paas ho. Distance se humara pyaar kam nahi, aur bhi gehra hota hai. 🗺️",
"Aaj ka din aapke liye bhot sabaq aur khushiyan lekar aaye. Main hamesha dil se aapke liye dua karta hoon. 🤲",
"Jab bhi aapka din thoda thakane wala ya bura ho, toh yaad rakhna ki koi hai jo aapke smile karne ka intezar kar raha hai. ☕",
"Aapki choti se choti baatein aur aapka har ek nakhra mujhe bhot pasand hai. Aap jaise ho, bilkul perfect ho. Perfect for me. 💖",
"Khaana thik se kha lena aur apna dhyan rakhna, kyunki aap ab sirf apne nahi ho, meri amanat ho. 🥰",
"Aapki dosti aur aapka pyaar, meri zindagi ke do sabse bade tohfe hain. I am the luckiest person alive. 🎁",
"Zindagi ki is bheed mein aapka sath milna mere liye ek chamatkar jaisa hai. Thank you for choosing me. 🌟",
"Aap mere liye sirf meri girlfriend/partner nahi ho, aap meri sabse achi dost ho jisse main sab kuch share kar sakta hoon. 🤝",


"Aap meri zindagi ki wo khwahish ho, jise khuda ne poora karke mujhe duniya ka sabse khush-kismat insaan bana diya. 💖",
"Pyaar ka matlab mujhe tab samajh aaya jab maine aapke sath rona, hansna aur har ek pareshani ko jhelna seekha. Aap mera sab kuch ho. ♾️",
"Duniya mein bhot si haseen cheezein hain, par mere liye aapki aawaz, aapki smile aur aapka sath hi sabse bada tohfa hain. 🌹",
"Log kehte hain waqt ke sath sab badal jata hai, par mera pyaar aapke liye har guzarte din ke sath aur gehra hota ja raha hai. ⏳",
"Jab aap mere sath hoti ho, toh lagta hai duniya ki saari pareshaniyan door hain. Aap hi mera sukoon aur meri jannat ho. 💕",
"Aapki saadgi hi mere dil ko sabse zyada bhaati hai. Bina kisi dikhawe ke aap jaisi ho, mere liye ekdum perfect ho. ✨",
"Mera dil sirf ek hi baat jaanta hai—har saans ke sath aapko aur bhi zyada chaahna aur aapka dhyan rakhna. 🥰",
"Aap sirf meri girlfriend nahi ho, aap meri rooh ka hissa ho. Aapse door hone ka khwab bhi mujhe dara deta hai. 🛡️",
"Zindagi mein mujhe kisi aur cheez ki tamanna nahi hai, bas har mod par aapka haath mere haath mein hona chahiye. 🤝",
"Aapke aane se meri zindagi mein jo raunq aayi hai, use main lafzon mein kabhi bayan nahi kar sakta. Thank you for everything. 🌟",
"Aapki har ek choti baat, aapka baal sanwarna, aapka gusse mein dekhna—mujhe aapki har adaa se mohabbat hai. 🎀",
"Mera har ek sapna aapke naam se shuru hota hai aur aapke sath ek khoobsurat ghar par hi khatam hota hai. 🏡",
"Aapko paana meri kismat thi, aapko chahna meri aadat hai, aur aapko hamesha khush rakhna mera sabse bada farz hai. 👑",
"Zindagi ke safar mein bhot se log milte hain, par aap jaisa sacha aur saaf dil khuda kisi kismat wale ko hi deta hai. 💎",
"Aapki ek jhalak hi kafi hoti hai mere pure din ki thakan ko mitaane ke liye. Aap mera sabse pyara energy booster ho. ⚡",
"Aapke sath bitaye huye lamhe meri zindagi ki sabse badi daulat hain, jise main hamesha apne dil mein chhupa kar rakhunga. 📦❤️",
"Agar mujhe apni zindagi dubara jeene ka mauka mile, toh main aapse aur pehle milna chahunga taaki aapse aur zyada pyaar kar saku. 🔄",
"Aapki aankhon mein jo gehrai hai, usme main poori zindagi ke liye kho jaane ko taiyar hoon. Mujhse kabhi door mat jaana. 🌌",
"Meri duniya bhot choti hai, aur us duniya ke sabse bade hisse mein sirf aur sirf aap basti ho. My whole universe! 🌍",
"Aapki smile se jo roshni milti hai, wo chand-taaron se bhi kahin zyada khoobsurat aur sachi hai. Keep smiling always. 🌙",

"Jab bhi main akela ya udaas hota hoon, aapka ek purana message padh kar hi mere chehre par muskurahat aa jaati hai. 📱",
"Aap mere liye wo sukoon ho jo ek lambe aur thake huye din ke baad ghar lautne par milta hai. You are my home. 🛋️",
"Maine khuda se jab bhi kuch maanga hai, toh sabse pehle aapki lambi umar, achi sehat aur aapki sachi khushi hi maangi hai. 🤲",
"Aapka mujhpar jo bharosa hai, wahi meri sabse badi taqat hai. Main is bharose ko kabhi tootne nahi doonga, yeh mera vaada hai. 🔒",
"Aapke gusse ke peeche jo fikar hoti hai na, mujhe us fikar se bhi utna hi pyaar hai jitna aapke romantic mood se. 🧸",
"Khaana thik se khana aur apna khayal rakhna. Aap sirf apne liye nahi, mere liye bhi bhot bhot zyada important ho. 🍲",
"Aapki choti si pareshani bhi mere dil ko bechain kar deti hai. Jab bhi koi baat ho, mujhse bina dare share kiya karo. 💬",
"Aap mere dil ki wo dhadkan ho jiske bina yeh jism bilkul be-jaan aur adhoora hai. Ishq-e-jaan ho aap meri. 💓",
"Zindagi mein chahe kitni bhi bheed ho, meri aankhein hamesha sirf aapko hi dhoodti hain aur aap par hi rukti hain. 👀",
"Aapki dosti ne mujhe jeena sikhaya aur aapke pyaar ne mujhe ek behtar insaan banaya. Meri zindagi ka sabse haseen hissa ho. 🎭",
"Main aapse bhot bhot bhot zyada pyaar karta hoon—itna zyada ki shaayad saare lafz bhi kam pad jayein isko dikhane ke liye. 📈",
"Aap mere sath ho toh har rasta aasan lagta hai, aur agar aap sath na ho toh sabse aasan mod bhi mushkil ban jata hai. 🛣️",
"Aapki hansi meri poori duniya ko khushnuma bana deti hai. Is hansi ko hamesha barkarar rakhna meri zimmedari hai. 😄",
"Aap mere liye khuda ka wo faisla ho jiske liye main hamesha unka shukr-guzar rahunga. True blessing of my life. 🤍",
"Aapki mojudgi se mere ghar aur meri zindagi ka har ek kona mehak uthta hai. Aap mere sukoon ka doosra naam ho. 🌸",
"Kabhi kabhi darr lagta hai ki aapse itna pyaar kaise ho gaya, par phir dil kehta hai ki aap jaisa pyara insaan toh sabka dil jeet le. 🥰",
"Aapki har ek yaad mere dil mein is tarah basi hai jaise kitabon mein sookhe huye gulab ke phool—hamesha taaza aur mehakte huye. 📖",
"Aap mere jeene ki wajah ho, meri har subah ka ujaala ho aur meri har raat ka aakhiri sukoon bhara khayal ho. 🌃",
"Main hamesha aapke sath khada rahoonga, chahe halat humare haq mein hon ya humare khilaf. Hum dono sath mein jeetenge. ⚔️",
"Aapka nakhra uthana mere liye koi kaam nahi, meri sabse pasandida hobby hai. Aap bas apna nakhra dikhate raho! 🧝‍♀️",

"Mera sabse bada khwab hai ki ek din humara ek chota sa pyara sa ghar ho, jahan har subah meri aankh aapka chehra dekh kar khule. ☕🏡",
"Main vaada karta hoon ki jab hum dono boodhe ho jayenge aur aapke baal safed ho jayenge, tab bhi main aapse utna hi pyaar karunga. 👵👴",
"Aapke har ek aansu ko apni aankhon mein samet lene ka vaada karta hoon. Aapko kabhi rone nahi doonga, meri jaan. 💧❌",
"Aane wala har saal, har mahina aur har ek pal mujhe sirf aapke sath hi bitana hai. Aap hi mera pehla aur aakhiri pyaar ho. 🗓️",
"Hum dono sath milkar ek bhot hi khoobsurat duniya banayenge, jahan sirf izzat, dosti, sacha pyaar aur dher saari masti hogi. 🎈",
"Main aapka haath kabhi nahi chodunga, chahe rasta kitna bhi pattharo se bhara ho ya manzil kitni bhi door ho. 🤝",
"Mera har ek din aapke kal ko behtar banane ke liye hoga. Main aapko duniya ki har wo khushi doonga jiske aap qabil ho. 🚀",
"Zindagi mein chahe jo bhi badlav aayein, aapke liye mera dil hamesha waisa hi dhadkega jaise pehle din dhadka tha. 💓",
"Aapka haath pakad kar chalna mujhe ek aisi taqat deta hai, jisse lagta hai main duniya ki kisi bhi mushkil se lad sakta hoon. 🛡️",
"Meri har ek kamyabi tabhi poori hogi jab aap mere sath us khushi ko celebrate karne ke liye khadi hongi. 🏆",
"Main hamesha aapka sacha dost bankar aapki har ek baat sununga aur ek sacha partner bankar har mod par sath khada rahunga. 🤝",
"Aapki khushiyan meri priority hain. Aapka har ek adhura khwab poora karna ab meri zindagi ka mission hai. 🎯",
"Hum dono ki jodi duniya ki sabse pyari jodi hai, aur main is jodi ko hamesha salamat rakhne ke liye har mumkin koshish karunga. 🧿",
"Aapke sath ek long drive par jaana hai, jahan rasta kabhi khatam na ho aur hum dono bas baatein karte rahein. 🚗💨",
"Mera har ek faisla ab aapse shuru hoga aur aapki khushi ko dhyan mein rakh kar hi liya jayega. You are my queen. 👑",
"Zindagi ke har ek utaar-chadhav mein mera dil sirf aapke liye hi safe zone rahega, jahan aap bina kisi darr ke sukoon pa sakti ho. 🕊️",
"Aap mere liye sirf mera aaj nahi ho, mera aane wala poora kal aur meri aakhiri saans tak ka safar ho. ⏳",
"Aapka naam mere naam ke sath kitna khoobsurat lagta hai na? Main is naam ke sath apni poori zindagi bitaane ko taiyar hoon. ✒️",
"Main aapko hamesha bhot saari respect doonga, kyunki aapne meri zindagi ko apna banakar mujhe bhot badi izzat di hai. 🙇‍♂️",
"Aakhiri letter tak pahunchne ke baad bhi humari yeh love story khatam nahi hogi, yeh toh bas ek nayi shuruat hogi. 🎬💞",

"Suno! Aap bhot zyada khoobsurat ho, isliye zyada bahar mat nikla karo, baki sabka mood kharab ho jata hai aapko dekh kar. 😜",
"Kya aapke paas koi extra dil hai? Kyunki mera wala toh aapne pehle din hi chura liya tha aur ab tak wapas nahi kiya. 💘",
"Aap chocolate se bhi zyada sweet aur ice-cream se bhi zyada cool ho. Mera mann karta hai aapko hamesha pocket mein rakhu. 🍫",
"Aapka ek chota sa notification aate hi mere chehre par jo smile aati hai, use dekh kar ghar wale mujhpar shaq karte hain! 🤫",
"Agar aapse pyaar karna ek crime hai, toh main bina kisi vakil ke zindagi bhar ke liye jail jaane ko taiyar hoon. 👮‍♀️❤️",
"Aap mere gusse wale chehre ko bhi ek second mein pighla deti ho. Lagta hai aapke paas koi romantic jaadu ki chadi hai. 🎩✨",
"Aapki smile duniya ki sabse khatarnak cheez hai—ek baar mein hi seedha dil par waar karti hai. Touchwood! 🎯😊",
"Aap mere liye bilkul morning tea jaisi ho, jiske bina mera din shuru toh ho sakta hai par thik se chal nahi sakta. ☕",
"Suno na, aapse thodi ladai kare bina mera din poora nahi hota. Ladne mein bhi aapse alag hi maza aata hai. 🥊🥰",
"Aapki aankhein bilkul kisi sundar jheel jaisi hain, jisme main har baar bina swimming jaane doob jata hoon. 🏊‍♂️❌",
"Aap mere phone ke wallpaper par bhi achi lagti ho, mere khayalon mein bhi aur sabse zyada mere sath khadi hui. 🖼️",
"Aap itni cute ho ki aapko dekh kar gusse mein bhi hansi aa jati hai. My cute little angry bird! 😡🐦❤️",
"Suno, aapse ek shikayat hai... Aap din-b-din aur bhi zyada pyari hoti ja rahi ho, iska kya ilaaj hai? 🤷‍♂️💞",
"Aapka har ek message mere liye ek bhot bada happiness packet hota hai. So, text karte raha karo! 📦✨",
"Mera dil bhot shareef tha, par jab se aapse mila hai, yeh bilkul ziddi aur badmash ban gaya hai—bas aapko hi maangta hai. 🦹‍♂️",
"Aapki aawaz sunte hi aisa lagta hai jaise background mein koi romantic violin baj raha ho. 🎻🎵",
"Aapko paakar aisa lagta hai jaise maine koi bhot bada jackpot jeet liya ho. I scored a 10/10 with you! 🎰",
"Aap mere liye wo khushi ho jise main kisi bhi cheez ke badle nahi bech sakta. Pure gold ho aap mere liye. 🥇",
"Suno, zyada hoshiyar mat bano, mujhe pata hai aapko bhi mujhse utna hi pyaar hai jitna mujhe aapse hai! 😉",
"Aapka gussa dekh kar darr nahi lagta, aur bhi zyada pyaar aata hai. Gusse mein aap aur bhi pyari lagti ho. 😡❤️",


"Hum dono ka rishta sirf is duniya ka nahi hai, lagta hai pichle kai janam se humari rooh ek doosre ko dhood rahi thi. 🔮",
"Aap meri zindagi ki wo adhuri dua ho, jise khuda ne poora karke mere pure wajood ko mukammal kar diya. 🕯️",
"Aapki mojudgi mere dil mein ek aisi shanti lati hai jise main poori duniya ki daulat se bhi nahi khareed sakta. 🌊",
"Duaon mein jab bhi mere haath uthte hain, mere hothon par sabse pehle aapka naam aur aapki salamati ki dua hoti hai. 🤲✨",
"Aap mere liye sirf ek insaan nahi ho, aap khuda ka bheja hua ek bhot hi pyara farishta ho jo meri zindagi sanwarne aaya hai. 👼",
"Aapka sacha pyaar hi meri rooh ka sabaq hai. Aapse milne ke baad maine zindagi ke akelepan ko hamesha ke liye bhool diya. 🌌",
"Aapke sath khamoshi mein baithna bhi bhot haseen lagta hai, kyunki humari rooh ek doosre ki khamoshi ko bhi samajh leti hai. 🤫❤️",
"Aap mere dil ki wo gehrai ho jahan koi aur kabhi pahunch hi nahi sakta. Yeh jagah hamesha ke liye sirf aapki hai. ⚓",
"Khuda ne hum dono ko ek doosre ke liye hi banaya hai, aur humara yeh rishta hamesha unke aashirwad se mehakta rahega. 🌸",
"Aap mere har ek zakhm ka marham ho. Jab aap mere sath hoti ho, toh zindagi ka har ek dukh bhot chota lagta hai. 🩹💞",
"Aapki mohabbat ne meri zindagi ko ek naya rasta aur ek nayi manzil di hai. Main hamesha aapke is pyaar ka mohtaj rahunga. 🧭",
"Aap mere dil ka wo sukoon ho jo har kisi ko nahi milta. Main bhot kismat wala hoon jo khuda ne aapko meri zindagi mein bheja. 💫",
"Aapke sath bitaya har ek din lagta hai jaise khuda ki ibadat ki tarah sacha aur pavitra ho. Pure love! 🤍",
"Aapka chehra dekh kar mera din shuru ho, toh lagta hai kismat ke saare darwaze mere liye khul gaye hain. 🗝️",
"Aap mere dil ke registan mein ek thandi aur pyari baarish ki tarah aayi ho, jisne sab kuch haseen bana diya. 🌧️🌹",
"Aapki baatein mere dil mein is tarah utar jaati hain jaise koi sacha sabaq—hamesha ke liye yaad rehne wali. 🧠❤️",
"Main aapse sirf aapke chehre se nahi, aapke saaf aur khoobsurat dil se mohabbat karta hoon jo is duniya mein sabse nayab hai. 💎",
"Aapka rishta mere sath ek aisi dor se bandha hai jise duniya ki koi bhi taqat ya galat-fehmi kabhi tod nahi sakti. 🪢",
"Aap meri har ek dua ka sacha jawaab ho. Jab bhi lagta tha zindagi mushkil hai, khuda ne aapko bhej kar sab aasan kar diya. 🌟",
"Hum dono ka sath hamesha rahega, is janam mein bhi, aane wale har ek janam mein bhi, aur hamesha ke liye. ♾️❤️",


"Aap meri zindagi ki wo khwahish ho, jise khuda ne poora karke mujhe duniya ka sabse khush-kismat insaan bana diya. 💖",
"Pyaar ka matlab mujhe tab samajh aaya jab maine aapke sath rona, hansna aur har ek pareshani ko jhelna seekha. Aap mera sab kuch ho. ♾️",
"Duniya mein bhot si haseen cheezein hain, par mere liye aapki aawaz, aapki smile aur aapka sath hi sabse bada tohfa hain. 🌹",
"Log kehte hain waqt ke sath sab badal jata hai, par mera pyaar aapke liye har guzarte din ke sath aur gehra hota ja raha hai. ⏳",
"Jab aap mere sath hoti ho, toh lagta hai duniya ki saari pareshaniyan door hain. Aap hi mera sukoon aur meri jannat ho. 💕",
"Aapki saadgi hi mere dil ko sabse zyada bhaati hai. Bina kisi dikhawe ke aap jaisi ho, mere liye ekdum perfect ho. ✨",
"Mera dil sirf ek hi baat jaanta hai—har saans ke sath aapko aur bhi zyada chaahna aur aapka dhyan rakhna. 🥰",
"Aap sirf meri girlfriend nahi ho, aap meri rooh ka hissa ho. Aapse door hone ka khwab bhi mujhe dara deta hai. 🛡️",
"Zindagi mein mujhe kisi aur cheez ki tamanna nahi hai, bas har mod par aapka haath mere haath mein hona chahiye. 🤝",
"Aapke aane se meri zindagi mein jo raunq aayi hai, use main lafzon mein kabhi bayan nahi kar sakta. Thank you for everything. 🌟",
"Aapki har ek choti baat, aapka baal sanwarna, aapka gusse mein dekhna—mujhe aapki har adaa se mohabbat hai. 🎀",
"Mera har ek sapna aapke naam se shuru hota hai aur aapke sath ek khoobsurat ghar par hi khatam hota hai. 🏡",
"Aapko paana meri kismat thi, aapko chahna meri aadat hai, aur aapko hamesha khush rakhna mera sabse bada farz hai. 👑",
"Zindagi ke safar mein bhot se log milte hain, par aap jaisa sacha aur saaf dil khuda kisi kismat wale ko hi deta hai. 💎",
"Aapki ek jhalak hi kafi hoti hai mere pure din ki thakan ko mitaane ke liye. Aap mera sabse pyara energy booster ho. ⚡",
"Aapke sath bitaye huye lamhe meri zindagi ki sabse badi daulat hain, jise main hamesha apne dil mein chhupa kar rakhunga. 📦❤️",
"Agar mujhe apni zindagi dubara jeene ka mauka mile, toh main aapse aur pehle milna chahunga taaki aapse aur zyada pyaar kar saku. 🔄",
"Aapki aankhon mein jo gehrai hai, usme main poori zindagi ke liye kho jaane ko taiyar hoon. Mujhse kabhi door mat jaana. 🌌",
"Meri duniya bhot choti hai, aur us duniya ke sabse bade hisse mein sirf aur sirf aap basti ho. My whole universe! 🌍",
"Aapki smile se jo roshni milti hai, wo chand-taaron se bhi kahin zyada khoobsurat aur sachi hai. Keep smiling always. 🌙",


"Jab bhi main akela ya udaas hota hoon, aapka ek purana message padh kar hi mere chehre par muskurahat aa jaati hai. 📱",
"Aap mere liye wo sukoon ho jo ek lambe aur thake huye din ke baad ghar lautne par milta hai. You are my home. 🛋️",
"Maine khuda se jab bhi kuch maanga hai, toh sabse pehle aapki lambi umar, achi sehat aur aapki sachi khushi hi maangi hai. 🤲",
"Aapka mujhpar jo bharosa hai, wahi meri sabse badi taqat hai. Main is bharose ko kabhi tootne nahi doonga, yeh mera vaada hai. 🔒",
"Aapke gusse ke peeche jo fikar hoti hai na, mujhe us fikar se bhi utna hi pyaar hai jitna aapke romantic mood se. 🧸",
"Khaana thik se khana aur apna khayal rakhna. Aap sirf apne liye nahi, mere liye bhi bhot bhot zyada important ho. 🍲",
"Aapki choti si pareshani bhi mere dil ko bechain kar deti hai. Jab bhi koi baat ho, mujhse bina dare share kiya karo. 💬",
"Aap mere dil ki wo dhadkan ho jiske bina yeh jism bilkul be-jaan aur adhoora hai. Ishq-e-jaan ho aap meri. 💓",
"Zindagi mein chahe kitni bhi bheed ho, meri aankhein hamesha sirf aapko hi dhoodti hain aur aap par hi rukti hain. 👀",
"Aapki dosti ne mujhe jeena sikhaya aur aapke pyaar ne mujhe ek behtar insaan banaya. Meri zindagi ka sabse haseen hissa ho. 🎭",
"Main aapse bhot bhot bhot zyada pyaar karta hoon—itna zyada ki shaayad saare lafz bhi kam pad jayein isko dikhane ke liye. 📈",
"Aap mere sath ho toh har rasta aasan lagta hai, aur agar aap sath na ho toh sabse aasan mod bhi mushkil ban jata hai. 🛣️",
"Aapki hansi meri poori duniya ko khushnuma bana deti hai. Is hansi ko hamesha barkarar rakhna meri zimmedari hai. 😄",
"Aap mere liye khuda ka wo faisla ho jiske liye main hamesha unka shukr-guzar rahunga. True blessing of my life. 🤍",
"Aapki mojudgi se mere ghar aur meri zindagi ka har ek kona mehak uthta hai. Aap mere sukoon ka doosra naam ho. 🌸",
"Kabhi kabhi darr lagta hai ki aapse itna pyaar kaise ho gaya, par phir dil kehta hai ki aap jaisa pyara insaan toh sabka dil jeet le. 🥰",
"Aapki har ek yaad mere dil mein is tarah basi hai jaise kitabon mein sookhe huye gulab ke phool—hamesha taaza aur mehakte huye. 📖",
"Aap mere jeene ki wajah ho, meri har subah ka ujaala ho aur meri har raat ka aakhiri sukoon bhara khayal ho. 🌃",
"Main hamesha aapke sath khada rahoonga, chahe halat humare haq mein hon ya humare khilaf. Hum dono sath mein jeetenge. ⚔️",
"Aapka nakhra uthana mere liye koi kaam nahi, meri sabse pasandida hobby hai. Aap bas apna nakhra dikhate raho! 🧝‍♀️",



"Mera sabse bada khwab hai ki ek din humara ek chota sa pyara sa ghar ho, jahan har subah meri aankh aapka chehra dekh kar khule. ☕🏡",
"Main vaada karta hoon ki jab hum dono boodhe ho jayenge aur aapke baal safed ho jayenge, tab bhi main aapse utna hi pyaar karunga. 👵👴",
"Aapke har ek aansu ko apni aankhon mein samet lene ka vaada karta hoon. Aapko kabhi rone nahi doonga, meri jaan. 💧❌",
"Aane wala har saal, har mahina aur har ek pal mujhe sirf aapke sath hi bitana hai. Aap hi mera pehla aur aakhiri pyaar ho. 🗓️",
"Hum dono sath milkar ek bhot hi khoobsurat duniya banayenge, jahan sirf izzat, dosti, sacha pyaar aur dher saari masti hogi. 🎈",
"Main aapka haath kabhi nahi chodunga, chahe rasta kitna bhi pattharo se bhara ho ya manzil kitni bhi door ho. 🤝",
"Mera har ek din aapke kal ko behtar banane ke liye hoga. Main aapko duniya ki har wo khushi doonga jiske aap qabil ho. 🚀",
"Zindagi mein chahe jo bhi badlav aayein, aapke liye mera dil hamesha waisa hi dhadkega jaise pehle din dhadka tha. 💓",
"Aapka haath pakad kar chalna mujhe ek aisi taqat deta hai, jisse lagta hai main duniya ki kisi bhi mushkil se lad sakta hoon. 🛡️",
"Meri har ek kamyabi tabhi poori hogi jab aap mere sath us khushi ko celebrate karne ke liye khadi hongi. 🏆",
"Main hamesha aapka sacha dost bankar aapki har ek baat sununga aur ek sacha partner bankar har mod par sath khada rahunga. 🤝",
"Aapki khushiyan meri priority hain. Aapka har ek adhura khwab poora karna ab meri zindagi ka mission hai. 🎯",
"Hum dono ki jodi duniya ki sabse pyari jodi hai, aur main is jodi ko hamesha salamat rakhne ke liye har mumkin koshish karunga. 🧿",
"Aapke sath ek long drive par jaana hai, jahan rasta kabhi khatam na ho aur hum dono bas baatein karte rahein. 🚗💨",
"Mera har ek faisla ab aapse shuru hoga aur aapki khushi ko dhyan mein rakh kar hi liya jayega. You are my queen. 👑",
"Zindagi ke har ek utaar-chadhav mein mera dil sirf aapke liye hi safe zone rahega, jahan aap bina kisi darr ke sukoon pa sakti ho. 🕊️",
"Aap mere liye sirf mera aaj nahi ho, mera aane wala poora kal aur meri aakhiri saans tak ka safar ho. ⏳",
"Aapka naam mere naam ke sath kitna khoobsurat lagta hai na? Main is naam ke sath apni poori zindagi bitaane ko taiyar hoon. ✒️",
"Main aapko hamesha bhot saari respect doonga, kyunki aapne meri zindagi ko apna banakar mujhe bhot badi izzat di hai. 🙇‍♂️",
"Aakhiri letter tak pahunchne ke baad bhi humari yeh love story khatam nahi hogi, yeh toh bas ek nayi shuruat hogi. 🎬💞",



"Suno! Aap bhot zyada khoobsurat ho, isliye zyada bahar mat nikla karo, baki sabka mood kharab ho jata hai aapko dekh kar. 😜",
"Kya aapke paas koi extra dil hai? Kyunki mera wala toh aapne pehle din hi chura liya tha aur ab tak wapas nahi kiya. 💘",
"Aap chocolate se bhi zyada sweet aur ice-cream se bhi zyada cool ho. Mera mann karta hai aapko hamesha pocket mein rakhu. 🍫",
"Aapka ek chota sa notification aate hi mere chehre par jo smile aati hai, use dekh kar ghar wale mujhpar shaq karte hain! 🤫",
"Agar aapse pyaar karna ek crime hai, toh main bina kisi vakil ke zindagi bhar ke liye jail jaane ko taiyar hoon. 👮‍♀️❤️",
"Aap mere gusse wale chehre ko bhi ek second mein pighla deti ho. Lagta hai aapke paas koi romantic jaadu ki chadi hai. 🎩✨",
"Aapki smile duniya ki sabse khatarnak cheez hai—ek baar mein hi seedha dil par waar karti hai. Touchwood! 🎯😊",
"Aap mere liye bilkul morning tea jaisi ho, jiske bina mera din shuru toh ho sakta hai par thik se chal nahi sakta. ☕",
"Suno na, aapse thodi ladai kare bina mera din poora nahi hota. Ladne mein bhi aapse alag hi maza aata hai. 🥊🥰",
"Aapki aankhein bilkul kisi sundar jheel jaisi hain, jisme main har baar bina swimming jaane doob jata hoon. 🏊‍♂️❌",
"Aap mere phone ke wallpaper par bhi achi lagti ho, mere khayalon mein bhi aur sabse zyada mere sath khadi hui. 🖼️",
"Aap itni cute ho ki aapko dekh kar gusse mein bhi hansi aa jati hai. My cute little angry bird! 😡🐦❤️",
"Suno, aapse ek shikayat hai... Aap din-b-din aur bhi zyada pyari hoti ja rahi ho, iska kya ilaaj hai? 🤷‍♂️💞",
"Aapka har ek message mere liye ek bhot bada happiness packet hota hai. So, text karte raha karo! 📦✨",
"Mera dil bhot shareef tha, par jab se aapse mila hai, yeh bilkul ziddi aur badmash ban gaya hai—bas aapko hi maangta hai. 🦹‍♂️",
"Aapki aawaz sunte hi aisa lagta hai jaise background mein koi romantic violin baj raha ho. 🎻🎵",
"Aapko paakar aisa lagta hai jaise maine koi bhot bada jackpot jeet liya ho. I scored a 10/10 with you! 🎰",
"Aap mere liye wo khushi ho jise main kisi bhi cheez ke badle nahi bech sakta. Pure gold ho aap mere liye. 🥇",
"Suno, zyada hoshiyar mat bano, mujhe pata hai aapko bhi mujhse utna hi pyaar hai jitna mujhe aapse hai! 😉",
"Aapka gussa dekh kar darr nahi lagta, aur bhi zyada pyaar aata hai. Gusse mein aap aur bhi pyari lagti ho. 😡❤️",



"Hum dono ka rishta sirf is duniya ka nahi hai, lagta hai pichle kai janam se humari rooh ek doosre ko dhood rahi thi. 🔮",
"Aap meri zindagi ki wo adhuri dua ho, jise khuda ne poora karke mere pure wajood ko mukammal kar diya. 🕯️",
"Aapki mojudgi mere dil mein ek aisi shanti lati hai jise main poori duniya ki daulat se bhi nahi khareed sakta. 🌊",
"Duaon mein jab bhi mere haath uthte hain, mere hothon par sabse pehle aapka naam aur aapki salamati ki dua hoti hai. 🤲✨",
"Aap mere liye sirf ek insaan nahi ho, aap khuda ka bheja hua ek bhot hi pyara farishta ho jo meri zindagi sanwarne aaya hai. 👼",
"Aapka sacha pyaar hi meri rooh ka sabaq hai. Aapse milne ke baad maine zindagi ke akelepan ko hamesha ke liye bhool diya. 🌌",
"Aapke sath khamoshi mein baithna bhi bhot haseen lagta hai, kyunki humari rooh ek doosre ki khamoshi ko bhi samajh leti hai. 🤫❤️",
"Aap mere dil ki wo gehrai ho jahan koi aur kabhi pahunch hi nahi sakta. Yeh jagah hamesha ke liye sirf aapki hai. ⚓",
"Khuda ne hum dono ko ek doosre ke liye hi banaya hai, aur humara yeh rishta hamesha unke aashirwad se mehakta rahega. 🌸",
"Aap mere har ek zakhm ka marham ho. Jab aap mere sath hoti ho, toh zindagi ka har ek dukh bhot chota lagta hai. 🩹💞",
"Aapki mohabbat ne meri zindagi ko ek naya rasta aur ek nayi manzil di hai. Main hamesha aapke is pyaar ka mohtaj rahunga. 🧭",
"Aap mere dil ka wo sukoon ho jo har kisi ko nahi milta. Main bhot kismat wala hoon jo khuda ne aapko meri zindagi mein bheja. 💫",
"Aapke sath bitaya har ek din lagta hai jaise khuda ki ibadat ki tarah sacha aur pavitra ho. Pure love! 🤍",
"Aapka chehra dekh kar mera din shuru ho, toh lagta hai kismat ke saare darwaze mere liye khul gaye hain. 🗝️",
"Aap mere dil ke registan mein ek thandi aur pyari baarish ki tarah aayi ho, jisne sab kuch haseen bana diya. 🌧️🌹",
"Aapki baatein mere dil mein is tarah utar jaati hain jaise koi sacha sabaq—hamesha ke liye yaad rehne wali. 🧠❤️",
"Main aapse sirf aapke chehre se nahi, aapke saaf aur khoobsurat dil se mohabbat karta hoon jo is duniya mein sabse nayab hai. 💎",
"Aapka rishta mere sath ek aisi dor se bandha hai jise duniya ki koi bhi taqat ya galat-fehmi kabhi tod nahi sakti. 🪢",
"Aap meri har ek dua ka sacha jawaab ho. Jab bhi lagta tha zindagi mushkil hai, khuda ne aapko bhej kar sab aasan kar diya. 🌟",





"Aapko chahna koi aadat nahi, meri rooh ki zaroorat hai. Jab tak meri saansein chalengi, is dil par sirf aapka hi haq rahega. ♾️",
"Duniya ki koi bhi taqat humare beech ki is mohobbat ko kam nahi kar sakti. Humari dilon ki dor bhot mazboot hai. 🪢",
"Aapki khushboo mere khayalon mein is tarah basi hai ki jab aap paas nahi hoti, tab bhi lagta hai aap mere sath hi khadi ho. 🍃",
"Log kehte hain ishq mein nind ud jaati hai, par mujhe toh aapke haseen khwab dekhne ke liye sone ka intezar rehta hai. 🌌",
"Aap mere liye wo sukoon ho jo adhoori khwahishon ke poora hone par milta hai. Mera sab kuch aap par hi aakar rukta hai. 💖",
"Main apni har ek khushi aapke naam karne ko taiyar hoon. Aapki aankhon mein ek bhi aansu mere dil ko bhot takleef deta hai. 💧",
"Aapka rishta mere sath is jahan se pare hai. Khuda ne hum dono ki takdeer ko ek bhot hi pyari dor se bandha hai. 💎",
"Aapki baatein mere dil mein ek aisi shanti lati hain, jaise kisi mandir ya dargah mein sukoon milta ho. Pure soulmate. ✨",
"Aap mere liye is poori kayenaat ka sabse nayab tohfa ho. Main marte dam tak aapki hamesha izzat aur hifazat karunga. 🛡️",
"Zindagi ka safar chahe kitna bhi dhoop-chaon se bhara ho, aapka saaya mere sath hai toh har mausam bhot haseen hai. ☀️🌦️",
"Aapki smile par meri poori zindagi qurbaan hai. Is smile ke liye main duniya ki kisi bhi mushkil se lad sakta hoon. 😊",
 "Aap sirf meri mohobbat nahi ho, aap mera guroor ho. Jab aap mere sath chalti ho, toh lagta hai duniya ka sabse ameer insaan main hoon. 👑",
"Aapke aane se pehle meri zindagi ek khali rasta thi, aapne aakar isme pyaar ke khoobsurat phool khila diye. 🌸",
"Mera dil bhot chota hai, par isme aapke liye jo pyaar hai, uski gehraai ko naapna is duniya ke bas mein nahi. 🌊",
"Aap mere jeene ki sachi wajah ho. Har subah meri aankhein bas aapko yaad karke hi khulti hain. 🌅",
"Aapki saadgi par mera dil is tarah fida hua hai ki ab duniya ki koi bhi chamak-dhamak mujhe achi nahi lagti. 🪞",
"Aap mere liye khuda ka wo inaam ho, jise paane ke baad zindagi mein kisi aur cheez ki tamanna hi nahi bachti. 🎁",
"Aapka haath mere haath mein hona hi meri sabse badi kamyabi hai. Mujhe baki duniya se koi lena-dena nahi. 🤝",
"Aapki ek jhalak se mera poora din ban jata hai. Aap mera sabse pyara aur sacha sukoon ho, meri jaan. 💞",
"Aakhiri saans tak mera dil sirf aapka naam lekar hi dhadkega. Humara yeh rishta hamesha ke liye amar hai. ♾️❤️",


"Raat ke is sannate mein jab saari duniya so rahi hoti hai, tab mera dil sirf aapke khayalon mein khoya rehta hai. 🌙",
"Aap mere liye wo shayari ho, jise main har roz padhna chahta hoon aur har baar ek naya ehsaas paata hoon. 📜",
"Kabhi socha nahi tha ki kisi se itni mohabbat ho jayegi ki uski khushi ke aage apni khushi choti lagne lagegi. 🥰",
"Aapki aawaz mein ek aisi mithas hai jo mere pure din ki thakan ko ek second mein door kar deti hai. 🎶",
"Main aapse bhot bhot zyada pyaar karta hoon—itna ki agar saare samundar siyahi ban jayein, toh bhi likhna kam pad jaye. ✒️",
"Aap mere dil ki wo safe jagah ho jahan main apni saari pareshaniyan bhool kar sukoon se saans le sakta hoon. 🕊️",
"Aapka mujhpar jo haq hai na, wo mujhe bhot pasand hai. Main hamesha aapka hi bankar rehna chahta hoon. 🔒",
"Aapki choti si fikar bhi mere dil ko bhot pyari lagti hai. Thank you meri zindagi mein aakar mujhe apna banane ke liye. ✨",
"Zindagi mein bhot se mod aayenge, par mera vaada hai ki main har mod par aapka haath aur sath hamesha thame rakhunga. 🤝",
"Aap mere liye wo umeed ho jo sabse andheri raat mein bhi roshni ki ek sachi kiran bankar chamakti hai. 🌟",
"Aapki har ek adaa, aapka muskura kar dekhna, aapka sharmana—meri har ek saans ko aapse aur zyada jod deta hai. 🦋",
"Maine apni zindagi ke saare haseen khwab aapke sath hi dekhe hain, aur unhe poora karna hi mera ek-matra maksad hai. 🏡",
"Aap chocolate se bhi zyada sweet ho, aur aapka gussa bhi kisi pyaare se bache jaisa lagta hai jo dil ko chhu leta hai. 🍫",
"Aapki ankhon mein jo sachaai hai, wahi meri zindagi ka sabse bada sahara hai. Mujhe aap par poora bharosa hai. 👀",
"Khaana thik se khana aur apna dhyan rakhna, kyunki aapki sehat se hi meri saari khushiyan judi hui hain. 🍲",
"Aap mere liye wo geet ho jo mera dil hamesha gungunana chahta hai. You are my forever melody. 🎵",
"Aapki mojudgi se hi meri kismat chamki hai. Lagta hai jaise khuda ne meri saari adhuri duayein ek sath poori kar di hain. 🤲",
"Main har roz khuda se bas aapki hansi maangta hoon. Aap muskurati ho toh lagta hai duniya ki har cheez mehak uthi hai. 😄",
"Aapka naam sunte hi jo sukoon mere chehre par dikhta hai, wahi mere sacha ishq ka sabse bada saboot hai. 💬💞",
"Aap mere aaj ho, mera kal ho, aur mera aane wala har ek khoobsurat lamha ho. I love you to the moon and back. 🗺️🚀",
"Mera ek sacha vaada hai aapse: Halat chahe jo bhi hon, main aapka sath pehle din ki tarah hi nibhaunga. 🤝",
"Budhape mein jab hum dono akele baithenge, tab bhi main aapka haath pakad kar yahi kahunga ki aapse behtar koi nahi. 👵👴",
"Aapke har ek dukh ko apna banana aur aapki har ek khushi ko dugna karna hi meri zindagi ka sabse bada farz hai. ⚖️",
"Zindagi mein chahe kitne bhi badlav aayein, aapke liye is dil mein jo izzat aur pyaar hai, wo hamesha barkarar rahega. ⏳",
"Main aapko duniya ki har wo khushi dena chahta hoon jiske aap qabil ho. Aapka har ek khwab ab mera khwab hai. 🎯",
"Aapki har pareshani mein main sabse pehle aapke samne ek dhal bankar khada rahoonga. You are never alone. 🛡️",
"Hum dono sath milkar ek bhot hi pyari aur haseen duniya banayenge, jahan sirf sukoon, izzat aur dher saara pyaar hoga. 🌌",
"Aapka naam mere naam ke sath kitna khoobsurat lagta hai. Main is naam ke sath apni poori zindagi bitaane ko taiyar hoon. ✒️",
"Mera har ek faisla ab aapki khushi ko dhyan mein rakh kar hi liya jayega. You are the queen of my heart and life. 👑",
"Aakhiri letter par aane ke baad bhi yeh kahani khatam nahi hogi, kyunki mera pyaar aapke liye har roz naye sire se shuru hota hai. 🎬💞",
"Aap mere liye sacha saal ho, meri har ek kamyabi ka jashn ho aur meri har mushkil ka aasan hal ho. 🌟",
"Aapka haath pakad kar chalna mujhe ek aisi taqat deta hai, jisse lagta hai main duniya ki kisi bhi mushkil se lad sakta hoon. 🏃‍♂️",
"Main hamesha aapka sacha dost bankar aapki har ek baat sununga aur ek sacha partner bankar har mod par sath khada rahunga. 🤝",
"Hum dono ki jodi duniya ki sabse pyari jodi hai, aur main is jodi ko hamesha duniya ki buri nazar se bacha kar rakhunga. 🧿",
"Aapke sath ek lambi drive par jaana hai, jahan rasta kabhi khatam na ho aur hum dono bas pyaar ki baatein karte rahein. 🚗💨",
"Zindagi ke har ek utaar-chadhav mein mera dil sirf aapke liye hi safe zone rahega, jahan aap bina kisi darr ke sukoon pa sakti ho. 🕊️",
"Main aapko hamesha bhot saari respect doonga, kyunki aapne meri zindagi ko apna banakar mujhe bhot badi izzat di hai. 🙇‍♂️",
"Aap mere liye sirf mera aaj nahi ho, mera aane wala poora kal aur meri aakhiri saans tak ka safar ho. ⏳",
"Aap mere har ek zakhm ka marham ho. Jab aap mere sath hoti ho, toh zindagi ka har ek dukh bhot chota lagta hai. 🩹💞",
"Hum dono ka sath hamesha rahega, is janam mein bhi, aane wale har ek janam mein bhi, aur hamesha ke liye. ♾️❤️",


"Suno! Aap bhot zyada khoobsurat ho, isliye zyada bahar mat nikla karo, baki sabka attention kharab ho jata hai! 😜",
"Kya aapke paas koi extra dil hai? Kyunki mera wala toh aapne pehle din hi chura liya tha aur ab tak wapas nahi kiya. 💘",
"Aap chocolate se bhi zyada sweet aur ice-cream se bhi zyada cool ho. Mera mann karta hai aapko hamesha pocket mein rakhu. 🍫",
"Aapka ek chota sa notification aate hi mere chehre par jo smile aati hai, use dekh kar ghar wale mujhpar shaq karte hain! 🤫",
"Agar aapse pyaar karna ek crime hai, toh main bina kisi vakil ke zindagi bhar ke liye jail jaane ko taiyar hoon. 👮‍♀️❤️",
"Aap mere gusse wale chehre ko bhi ek second mein pighla deti ho. Lagta hai aapke paas koi romantic jaadu ki chadi hai. 🎩✨",
"Aapki smile duniya ki sabse khatarnak cheez hai—ek baar mein hi seedha dil par waar karti hai. Touchwood! 🎯😊",
"Aap mere liye bilkul morning tea jaisi ho, jiske bina mera din shuru toh ho sakta hai par thik se chal nahi sakta. ☕",
"Suno na, aapse thodi ladai kare bina mera din poora nahi hota. Ladne mein bhi aapse alag hi maza aata hai. 🥊🥰",
"Aapki aankhein bilkul kisi sundar jheel jaisi hain, jisme main har baar bina swimming jaane doob jata hoon. 🏊‍♂️❌",
"Aap mere phone ke wallpaper par bhi achi lagti ho, mere khayalon mein bhi aur sabse zyada mere sath khadi hui. 🖼️",
"Aap itni cute ho ki aapko dekh kar gusse mein bhi hansi aa jati hai. My cute little angry bird! 😡🐦❤️",
"Suno, aapse ek shikayat hai... Aap din-b-din aur bhi zyada pyari hoti ja rahi ho, iska kya ilaaj hai? 🤷‍♂️💞",
"Aapka har ek message mere liye ek bhot bada happiness packet hota hai. So, text karte raha karo! 📦✨",
"Mera dil bhot shareef tha, par jab se aapse mila hai, yeh bilkul ziddi aur badmash ban gaya hai—bas aapko hi maangta hai. 🦹‍♂️",
"Aapki aawaz sunte hi aisa lagta hai jaise background mein koi romantic violin baj raha ho. 🎻🎵",
"Aapko paakar aisa lagta hai jaise maine koi bhot bada jackpot jeet liya ho. I scored a 10/10 with you! 🎰",
"Aap mere liye wo khushi ho jise main kisi bhi cheez ke badle nahi bech sakta. Pure gold ho aap mere liye. 🥇",
"Suno, zyada hoshiyar mat bano, mujhe pata hai aapko bhi mujhse utna hi pyaar hai jitna mujhe aapse hai! 😉",
"Aapka gussa dekh kar darr nahi lagta, aur bhi zyada pyaar aata hai. Gusse mein aap aur bhi pyari lagti ho. 😡❤️",
"Hum dono ka rishta sirf is duniya ka nahi hai, lagta hai pichle kai janam se humari rooh ek doosre ko dhood rahi thi. 🔮",
"Aap meri zindagi ki wo adhuri dua ho, jise khuda ne poora karke mere pure wajood ko mukammal kar diya. 🕯️",
"Aapki mojudgi mere dil mein ek aisi shanti lati hai jise main poori duniya ki daulat se bhi nahi khareed sakta. 🌊",
"Duaon mein jab bhi mere haath uthte hain, mere hothon par sabse pehle aapka naam aur aapki salamati ki dua hoti hai. 🤲✨",
"Aap mere liye sirf ek insaan nahi ho, aap khuda ka bheja hua ek bhot hi pyara farishta ho jo meri zindagi sanwarne aaya hai. 👼",
"Aapka sacha pyaar hi meri rooh ka sabaq hai. Aapse milne ke baad maine zindagi ke akelepan ko hamesha ke liye bhool diya. 🌌",
"Aapke sath khamoshi mein baithna bhi bhot haseen lagta hai, kyunki humari rooh ek doosre ki khamoshi ko bhi samajh leti hai. 🤫❤️",
"Aap mere dil ki wo gehrai ho jahan koi aur kabhi pahunch hi nahi sakta. Yeh jagah hamesha ke liye sirf aapki hai. ⚓",
"Khuda ne hum dono ko ek doosre ke liye hi banaya hai, aur humara yeh rishta hamesha unke aashirwad se mehakta rahega. 🌸",
"Aapka rishta mere sath ek aisi dor se bandha hai jise duniya ki koi bhi taqat ya galat-fehmi kabhi tod nahi sakti. 🪢",
"Aap meri har ek dua ka sacha jawaab ho. Jab bhi lagta tha zindagi mushkil hai, khuda ne aapko bhep kar sab aasan kar diya. 🌟",
"Aapke sath bitaya har ek din lagta hai jaise khuda ki ibadat ki tarah sacha aur pavitra ho. Pure love! 🤍",
"Aapka chehra dekh kar mera din shuru ho, toh lagta hai kismat ke saare darwaze mere liye khul gaye hain. 🗝️",
"Aap mere dil ke registan mein ek thandi aur pyari baarish ki tarah aayi ho, jisne sab kuch haseen bana diya. 🌧️🌹",
"Aapki baatein mere dil mein is tarah utar jaati hain jaise koi sacha sabaq—hamesha ke liye yaad rehne wali. 🧠❤️",
"Main aapse sirf aapke chehre se nahi, aapke saaf aur khoobsurat dil se mohabbat karta hoon jo is duniya mein sabse nayab hai. 💎",
"Aapka rishta mere sath ek aisi dor se bandha hai jise duniya ki koi bhi taqat ya galat-fehmi kabhi tod nahi sakti. 🪢",
"Aap meri har ek dua ka sacha jawaab ho. Jab bhi lagta tha zindagi mushkil hai, khuda ne aapko bhej kar sab aasan kar diya. 🌟",
"Aapka sacha aur saaf dil hi meri sabse badi poonji hai. Main iski hamesha dil se kadr karunga. 💖",
"Hum dono ka sath hamesha rahega, is janam mein bhi, aane wale har ek janam mein bhi, aur hamesha ke liye. ♾️❤️"

];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("letters-container");
    const modal = document.getElementById("letter-modal");
    const modalDayNum = document.getElementById("modal-day-num");
    const modalText = document.getElementById("modal-letter-text");
    const closeBtn = document.querySelector(".close-btn");

    // 1. Generate 3D Flip Cards Dynamically
    lettersList.forEach((text, index) => {
        const day = index + 1;
        
        const cardScene = document.createElement("div");
        cardScene.className = "card-scene";
        
        cardScene.innerHTML = `
            <div class="card-3d">
                <div class="card-face card-front">
                    <div class="heart-icon">❤️</div>
                    <div class="day-tag">DAY ${day}</div>
                </div>
                <div class="card-face card-back">
                    <h3>Secret Note</h3>
                    <div class="click-to-read">Open Letter ✉️</div>
                </div>
            </div>
        `;
        
        // Open Modal on Card Click
        cardScene.addEventListener("click", () => {
            modalDayNum.textContent = day;
            modalText.textContent = text;
            modal.classList.add("active");
        });
        
        container.appendChild(cardScene);
    });

    // Close Modal Logic
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });

    // 2. Ambient Floating Hearts Effect
    const heartsContainer = document.getElementById("hearts-container");
    const heartTypes = ["❤️", "💖", "💕", "💘", "💝"];
    
    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "floating-heart";
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // 4s to 7s
        heart.style.fontSize = Math.random() * 15 + 15 + "px"; // 15px to 30px
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    // Generate hearts periodically
    setInterval(createHeart, 300);
});
