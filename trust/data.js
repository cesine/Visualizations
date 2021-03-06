var locale = 'ka';

var chart_data = {
  trust: {
    axis: ["rel", "army", "police", "ex_gov", "ed", "parl", "eu", "un", "health", "banks", "omb", "local_gov", "pres", "ngo", "media", "courts", "pol_parties"],
    values: [85,68,50,48,44,43,41,40,39,37,32,28,28,25,22,19,16],
    bar_color: '#23a570'
  },
  distrust: {
    axis: ["pres", "courts", "banks", "local_gov", "pol_parties", "health", "media", "police", "ed", "ngo", "parl", "ex_gov", "un", "eu", "army", "omb", "rel"],
    values: [31,26,20,18,17,17,14,11,10,9,8,7,6,6,4,4,2],
    bar_color: '#db5d5d'
  },
  partial: {
    axis: ["media", "pol_parties", "local_gov", "health", "ngo", "parl", "pres", "police", "ed", "un", "banks", "eu", "omb", "courts", "ex_gov", "army", "rel"],
    values: [51,44,40,38,33,31,31,31,31,29,28,28,28,28,27,18,9],
    bar_color: '#48617a'
  },
  not_know: {
    axis: ["omb", "ngo", "courts", "un", "eu", "pol_parties", "ex_gov", "parl", "ed", "banks", "local_gov", "media", "army", "pres", "police", "health", "rel"],
    values: [35,33,27,25,25,23,18,17,16,15,14,13,10,9,8,6,5],
    bar_color: '#666666'
  }
};

var translations = {
  en: {
    lang_switcher: 'ქართული',
    categories:{
      army: "Army",
      banks: "Banks",
      courts: "Court System",
      ed: "Educational System",
      eu: "European Union",
      ex_gov: "Executive Government",
      health: "Healthcare System",
      local_gov: "Local Government",
      media: "Media",
      ngo: "NGOs",
      omb: "Ombudsman",
      parl: "Parliament",
      police: "Police",
      pol_parties: "Political Parties",
      pres: "President",
      rel: "Religious Institutions",
      un: "United Nation"
    },
    groups:{
      trust: "Trust",
      distrust: "Distrust",
      partial: "Partially Both",
      not_know: "Don't Know"
    },
    export_text:{
      downloadPNG: "Download PNG image",
      downloadJPEG: "Download JPEG image",
      downloadPDF: "Download PDF document",
      downloadSVG: "Download SVG vector image",
      exportButtonTitle: "Export the chart",
      printButtonTitle: "Print the chart"
    },
    box:{
      1: "People have highest trust in Religious Institutions (85%) and lowest trust with Political Parties (16%).",
      2: "people have highest distrust in the President (31%) and lowest distrust with Religious Institutions (2%).",
      3: "People have highest indifference towards the Media (51%) and most do not know how they feel about the Obmudsman (35%) and NGOs (33%).",
      4: "Trust is expressed more often in Georgia than distrust. On average, 39% express trust with an institution, while 12% express distrust.",
    },
    title: "Who Do Georgians Trust?",
    side_text: {
      1: "The Caucasus Research Resource Centers interviewed 2502 people in Georgia. The survey was conducted throughout the country using face-to-face interviews and cluster sampling from October 26 to November 29, 2012.",
      2: "Interviewees were asked to assess their level of trust toward 17 different social institutions and political unions. JumpStart Georgia visualized their responses broken down by 4 responses: trust, distrust, partially both, and don't know."
    },
    source:{
      title: "Source",
      link_text: "The Caucasus Research Resource Centers, Caucasus Barometer 2012",
      link: "http://www.crrc.ge/caucasusbarometer/"
    }
  },
  ka: {
    lang_switcher: 'English',
    categories:{
      army: "ჯარი",
      banks: "ბანკები",
      courts: "სასამართლო სისტემა",
      ed: "საგანმანათლებლო სისტემა",
      eu: "ევროკავშირი",
      ex_gov: "აღმასრულებელი ხელისუფლება",
      health: "ჯანდაცვის სისტემა",
      local_gov: "ადგილობრივი ხელისუფლება",
      media: "მასმედია",
      ngo: "არასამთავრობო ორგანიზაციები",
      omb: "სახალხო დამცველი",
      parl: "პარლამენტი",
      police: "პოლიცია",
      pol_parties: "პარტიები",
      pres: "პრეზიდენტი",
      rel: "რელიგიური ინსტიტუტები",
      un: "გაერო"
    },
    groups:{
      trust: "ვენდობი",
      distrust: "არ ვენდობი",
      partial: "ნაწილობრივ ორივე",
      not_know: "არ ვიცი"
    },
    export_text:{
      downloadPNG: "ჩამოტვირთე PNG გამოსახულება",
      downloadJPEG: "ჩამოტვირთე JPEG გამოსახულება",
      downloadPDF: "ჩამოტვირთე PDF დოკუმენტი",
      downloadSVG: "ჩამოტვირთე SVG ვექტორული გამოსახულება",
      exportButtonTitle: "შეინახე გამოსახულება",
      printButtonTitle: "ამობეჭდე გრაფიკი",
      menu_title: "ცხრილის მენიუ"
    },
    box:{
      1: "საქართველოში ყველაზე მეტი ადამიანი ენდობა რელიგიურ ინსტიტუტებს  - 85%, ყველაზე ცოტა - პოლიტიკურ პარტიებს - 16%.",
      2: "ყველაზე მეტი ადამიანი უნდობლობას პრეზიდენტს უცხადებს - 31%, ყველაზე ცოტა - რელიგიურ ინსტიტუტებს - 2%.",
      3: "ორმაგი დამოკიდებულება ყველაზე მეტ ადამიანს მასმედიის მიმართ აქვს - 51%, ყველაზე გაურკვეველი დამოკიდებულება - ობმუდსმენისა (35%) და არასამთავრობოების (33%) მიმართ.",
      4: "საქართველოში ნდობას უფრო ხშირად გამოხატავენ, ვიდრე უნდობლობას: დასახელებულ ინსტიტუტს საშუალოდ  გამოკითხულთა 39% ენდობა, 12% - არა.",
    },
    title: "ვის ენდობა საქართველოს მოსახლეობა?",
    side_text: {
      1: "კავკასიის კვლევითი რესურსების ცენტრმა მთელი ქვეყნის მასშტაბით 2502 ადამიანი გამოკითხა. კვლევა პირისპირ ინტერვიუს მეთოდისა და კლასტერული შერჩევის გამოყენებით 2012 წლის 26 ოქტობრიდან 29 ნოემბრამდე მიმდინარეობდა.",
      2: "ინტერვიუერებმა რესპონდენტებს 17 სხვადასხვა სოციალური ინსტიტუტისა თუ პოლიტიკური გაერთიანების მიმართ ნდობის შეფასება სთხოვეს. მათი პასუხების მიხედვით, ჯამპსტარ ჯორჯიამ ააგო ინტერაქტიული ვიზუალიზაცია, სადაც წარმოდგენილია 17-ივე ინსტიტუტისა თუ გაერთიანების რეიტინგი ოთხი სხვადასხვა პასუხის მიხედვით: “ვენდობი”, “არ ვენდობი”, “ნაწილობრივ ვენდობი, ნაწილობრივ არა” და “არ ვიცი”."
    },
    source:{
      title: "წყარო",
      link_text: "კავკასიის კვლევითი რესურსების ცენტრი, კავკასიის ბარომეტრი 2012",
      link: "http://www.crrc.ge/ge/caucasusbarometer/"
    }
  }
};
