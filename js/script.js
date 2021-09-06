let descriptionInNepali = "प्रकाश संचार र आपूर्तिकर्ता बेलाका रामपुरको  एक अग्रणी संचार सेवा प्रदायक  डिश होम आपूर्तिकर्ता हो। यो एक प्रसिद्ध सेवा प्रदायक, जो ग्राहकहरु संग धेरै राम्रो सम्बन्ध निर्माण कायम गर्न सफल भएको छ। हामी गुणस्तरीय सेवाको ग्यारेन्टी गर्दछौ । हामी ग्राहक प्रती निकै उत्तरदायी भएर काम गर्दछौं ।  ब्यापार को मुनाफा मा मात्र हाम्रो  ध्यान केन्द्रित छैन,  उचित मुल्यमा गुणस्तरीय सेवा प्रदान गर्नु नै हाम्रो मूल लक्ष्य हो। ";
let descriptionoInEnglish = "Prakash Communication and Suppliers is a leading communication service provider and DishHome supplier in Belaka Rampur. This is a renowned service provider, which has been successful in building a very good relationship with the customers. We gurantee quality of service. We provide good customer support as well. We not only focus on the profit of the business but providing quality of service at reasonable price is our motto.";
let descContents = document.getElementById("descContents");
let langCounter = 0;
let descriptionLangchanger = document.getElementById("descriptionLangchanger");
descriptionLangchanger.addEventListener("click", event => {
    console.log("clicked")
    if (langCounter % 2 == 0) {
        descContents.innerText = descriptionInNepali;
        descriptionLangchanger.innerText = "Read in English 🇺🇸";
        descriptionLangchanger.style.backgroundColor = "#041E42";
        descriptionLangchanger.style.color = "#fff";
    } else {
        descContents.innerText = descriptionoInEnglish;
        descriptionLangchanger.innerText = "Read in Nepali 🇳🇵";
        descriptionLangchanger.style.backgroundColor = "#C8102E";

    }
    langCounter++;
})

// Making teh contact cards clickable
let contactListCons = document.getElementsByClassName("contactListCon");
Array.from(contactListCons).forEach(item => {
    item.addEventListener("click", event => {
        console.log(item.children[2].href)
        url = item.children[2].href;
        // var windowSize = "width=" + window.innerWidth + ",height=" + window.innerHeight + ",scrollbars=no";
        // window.open(url, "_self");
        // window.location.href = url;
        // alert(url)
    })
})