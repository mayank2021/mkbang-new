(this["webpackJsonpteaching-site"]=this["webpackJsonpteaching-site"]||[]).push([[3],{102:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(34),i=a(56),n=a(57),r=a(99),o=a(98),l=(a(58),a(59)),d=(a(68),a.p+"static/media/team.26da34a6.jpg"),m=a.p+"static/media/team2.df543210.jpg",j=a.p+"static/media/students.b3214fdf.jpg",u=a.p+"static/media/student2.78d18ccc.jpg",b=a.p+"static/media/cricket.a8db839b.jpg",h=a.p+"static/media/cricket2.924eb79e.jpg",p=a.p+"static/media/cricket3.040c5260.jpg",g=[{key:"1",image:"".concat(d),title:"Legend 1"},{key:"2",image:"".concat(m),title:"Legend 1"},{key:"3",image:"".concat(j),title:"Legend 1"},{key:"4",image:"".concat(u),title:"Legend 1"},{key:"2",image:"".concat(b),title:"Legend 1"},{key:"3",image:"".concat(h),title:"Legend 1"},{key:"4",image:"".concat(p),title:"Legend 1"}],f=a(5),x=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(f.jsx)(l.Carousel,{width:"100%",infiniteLoop:!0,showThumbs:!1,autoPlay:!0,stopOnHover:!1,interval:"4000",children:g.map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:e.image}),Object(f.jsxs)("p",{className:"legend",children:[" ",e.title]})]})}))})}}]),a}(s.Component),O=(a(69),function(){return Object(f.jsx)("section",{className:"about_section",id:"about",children:Object(f.jsxs)("div",{className:"utility_center_text",children:[Object(f.jsx)("h2",{className:"about_section__heading utility_bottom_margin",children:"About Us"}),Object(f.jsxs)("div",{className:"about_section__row",children:[Object(f.jsx)("div",{className:"about_section__col_one",children:Object(f.jsxs)("p",{className:"about_section__paragraph",children:[Object(f.jsxs)("div",{className:"about_section_tagline",children:[Object(f.jsx)("h1",{className:"about_section_tagline-text about_section_tagline-think-text",children:"Think"}),Object(f.jsx)("h1",{className:"about_section_tagline-text about_section_tagline-design-text",children:"design"}),Object(f.jsx)("h1",{className:"about_section_tagline-text about_section_tagline-develop-text",children:"develop"})]}),"What is color contrast? Contrasting colors are colors that differ from one another. Levels of contrast vary from high to low, depending on their ... Missing: 353849 \u200e| Must include. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"]})}),Object(f.jsx)("div",{class:"about_section__col_two",children:Object(f.jsxs)("div",{className:"composition",children:[Object(f.jsx)("img",{src:"https://i.stack.imgur.com/DdyhJ.png",alt:"develop",className:"composition_photo composition_photo_p1"}),Object(f.jsx)("img",{src:"https://i.stack.imgur.com/DdyhJ.png",alt:"design",className:"composition_photo composition_photo_p2"}),Object(f.jsx)("img",{src:"https://i.stack.imgur.com/DdyhJ.png",alt:"think",className:"composition_photo composition_photo_p3"})]})})]})]})})}),_=a(55),N=(a(70),a.p+"static/media/close.31ad5b68.svg"),v=a(100),y=a(71),k=a.n(y),w=a(73),C=(a(74),a(75)),A=a.n(C),S=function(e){var t=Object(s.useState)(!1),a=Object(_.a)(t,2),c=a[0],i=a[1],n=Object(s.useState)(""),r=Object(_.a)(n,2),o=(r[0],r[1],Object(s.useState)("")),l=Object(_.a)(o,2),d=(l[0],l[1],Object(s.useState)("")),m=Object(_.a)(d,2),j=m[0],u=m[1],b=Object(s.useState)({fullName:"",sex:"",dateOfBirth:"",fatherName:"",motherName:"",mobile:"",residentialAddress:"",previousSchoolName:"",tenthPercentage:"",resigstrationNumber:""}),h=Object(_.a)(b,2),p=h[0],g=h[1];function x(e){return new Promise((function(t){var a=document.createElement("script");a.src=e,a.onload=function(){t(!0)},a.onerror=function(){t(!1)},document.body.appendChild(a)}))}document.domain.includes("localhost");function O(){return N.apply(this,arguments)}function N(){return(N=Object(w.a)(k.a.mark((function t(){var a,s;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("https://checkout.razorpay.com/v1/checkout.js");case 2:return t.sent||alert("make sure you have a healthy internet connection"),t.next=6,A.a.post("http://localhost:1337/razorpay",{headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:e.course.price})}).then((function(e){return e}));case 6:a=t.sent,s={key:"rzp_test_jRh1ENNPJjyNNO",currency:a.data.currency,amount:a.data.amout,name:e.course.name,description:e.course.descrip,image:e.course.img,order_id:a.data.id,handler:function(e){alert(e.razorpay_payment_id),alert(e.razorpay_order_id),alert(e.razorpay_signature)}},new window.Razorpay(s).open();case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=function(){var e=Object(w.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,A.a.post("http://localhost:1337/send_mail",{data:p});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"form_section",id:"register",children:Object(f.jsx)("div",{className:"form_row",children:Object(f.jsx)("div",{className:"book",children:Object(f.jsxs)("div",{className:"book_form",children:[c?null:Object(f.jsxs)("div",{className:"top-twist",children:[Object(f.jsx)("h2",{className:"about_section__heading form-heading",children:"please fill out the fields"}),Object(f.jsxs)("div",{className:"radio-input",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{className:"radio--input",type:"radio",id:"junior",name:"batch",value:"junior",onChange:function(e){return u(e.target.value)}}),Object(f.jsx)("label",{className:"radio--label",for:"junior",children:"11tg/12th"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{className:"radio--input",type:"radio",id:"senior",name:"batch",value:"senior",onChange:function(e){return u(e.target.value)}}),Object(f.jsx)("label",{className:"radio--label",for:"senior",children:"CA FOUNDATION/CSEET/CMA FOUNDATION"})]})]})]}),c?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{style:{color:"black"},children:"Processing..."}),Object(f.jsx)("h2",{style:{color:"black"},children:"Please Wait :)"})]}):Object(f.jsxs)("form",{onSubmit:function(){return y()},className:"form",children:[Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"text",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{fullName:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"Full Name",id:"name",required:!0}),Object(f.jsx)("label",{for:"name",className:"form__label",children:"Full Name"})]}),Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"text",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{sex:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"Sex",id:"sex",required:!0}),Object(f.jsx)("label",{for:"sex",className:"form__label",children:"Sex"})]}),Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"text",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{dateOfBirth:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"DOB",id:"dob",required:!0}),Object(f.jsx)("label",{for:"dob",className:"form__label",children:"DOB"})]}),Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"text",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{fatherName:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"Father's name",id:"fatherName",required:!0}),Object(f.jsx)("label",{for:"fatherName",className:"form__label",children:"Father's name"})]}),Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"text",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{motherName:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"Mother's Name",id:"motherName",required:!0}),Object(f.jsx)("label",{for:"motherName",className:"form__label",children:"Mother's name"})]}),Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"number",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{mobile:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"Mobile",id:"mobileNumber",required:!0}),Object(f.jsx)("label",{for:"mobileNumber",className:"form__label",children:"Mobile"})]}),Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"text",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{residentialAddress:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"Residential address",id:"residentialAddress",required:!0}),Object(f.jsx)("label",{for:"residentialAddress",className:"form__label",children:"Residential address"})]}),"junior"==j?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"text",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{previousSchoolName:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"Previous school Name",id:"previousschoolName",required:!0}),Object(f.jsx)("label",{for:"previousschoolName",className:"form__label",children:"Previous school Name"})]}),Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"text",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{tenthPercentage:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"10th percentage",id:"tenthScore",required:!0}),Object(f.jsx)("label",{for:"tenthScore",className:"form__label",children:"10th percentage"})]})]}):Object(f.jsxs)("div",{className:"form_group",children:[Object(f.jsx)("input",{type:"text",onChange:function(e){return g(Object(v.a)(Object(v.a)({},p),{},{resigstrationNumber:e.target.value}))},className:"form__input",autocomplete:"off",placeholder:"Registration No.",id:"registrationNo",required:!0}),Object(f.jsx)("label",{for:"registrationNo",className:"form__label",children:"Registration No."})]}),Object(f.jsx)("div",{className:"form_group",children:Object(f.jsxs)("button",{type:"submit",className:"form_button btn",onClick:O,children:["next",Object(f.jsx)("img",{style:{width:"20%",marginLeft:"10px"},src:"https://media.giphy.com/media/ggiIT76o0nKxBq671w/giphy.gif"})]})})]})]})})})})},E=function(e){var t=Object(s.useState)(!1),a=Object(_.a)(t,2),c=a[0],i=a[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"courses_card",children:[Object(f.jsx)("img",{src:e.img,alt:"course-image"}),Object(f.jsxs)("div",{className:"course_text",children:[Object(f.jsxs)("h3",{className:"course_name",children:[" ",e.name," "]}),Object(f.jsxs)("p",{className:"course_descrip",children:[" ",e.descrip," "]}),Object(f.jsxs)("p",{className:"course_price",children:[" ",e.price," "]})]}),Object(f.jsx)("div",{className:"course_buy--button",onClick:function(){return i(!0)},children:"buy now"})]}),c?Object(f.jsx)("section",{className:"project_detail_section modal",children:Object(f.jsxs)("div",{className:"project__detail modal-main",children:[Object(f.jsx)("button",{className:"cancel-button",onClick:function(){return i(!1)},children:Object(f.jsx)("img",{style:{width:"60%"},src:N})}),Object(f.jsx)(S,{course:e})]})}):null]})},F=a(41),L=(a(94),a(37)),I=a(38),B=a(39),M=a(40),P=[{key:"1",image:"".concat(B.a),score:"295",name:"ronak r. boobana"},{key:"2",image:"".concat(M.a),score:"245",name:"jayashri d. bhutra"},{key:"3",image:"".concat(I.a),score:"495",name:"Bhavana r. kharloya"}],H=function(){return Object(f.jsx)("div",{className:"student_result_section",children:Object(f.jsxs)("div",{className:"utility_center_text",children:[Object(f.jsx)("h2",{className:"about_section__heading utility_padding_bottom utility__bottom-border",children:"student result"}),Object(f.jsxs)("div",{className:"student_card--container",children:[P.map((function(e){return Object(f.jsx)(L.a,{number:e.key,img:e.image,score:e.score,name:e.name})})),Object(f.jsx)("div",{className:"studentresult_button_container",children:Object(f.jsxs)("a",{href:"/studentresult",className:"student_result_button",children:["see all",Object(f.jsx)("img",{style:{width:"20%",marginLeft:"5px"},src:"https://media.giphy.com/media/DKLBHFBqz9FhobslH9/giphy.gif"})]})})]})]})})},T=(a(95),a.p+"static/media/f1.ec201fe8.jpg"),D=a.p+"static/media/f2.3b48d654.jpg",q=a.p+"static/media/f3.af7211d8.jpg",R=a.p+"static/media/f4.61c4a1d0.jpg",K=a.p+"static/media/f5.3330c9f2.jpg",J=a.p+"static/media/f6.8dc40c36.jpg",U=a.p+"static/media/f7.90039530.jpg",z=a.p+"static/media/f8.f962634b.jpg",G=a.p+"static/media/f9.e9dc7831.jpg",W=function(){return Object(f.jsxs)("div",{className:"student_feedback_section",id:"feedback",children:[Object(f.jsx)("div",{className:"utility_center_text",children:Object(f.jsx)("h2",{className:"about_section__heading",children:"Student feedback"})}),Object(f.jsxs)("div",{class:"row",children:[Object(f.jsxs)("div",{class:"column first--column",children:[Object(f.jsx)("img",{src:D,style:{width:"100%"}}),Object(f.jsx)("img",{className:"hide-mobile",src:q,style:{width:"100%"}}),Object(f.jsx)("img",{className:"hide-desk",src:G,style:{width:"100%"}})]}),Object(f.jsxs)("div",{class:"column",children:[Object(f.jsx)("img",{src:R,style:{width:"100%"}}),Object(f.jsx)("img",{src:K,style:{width:"100%"}}),Object(f.jsx)("img",{src:T,style:{width:"100%"}})]}),Object(f.jsxs)("div",{class:"column",children:[Object(f.jsx)("img",{src:U,style:{width:"100%"}}),Object(f.jsx)("img",{src:z,style:{width:"100%"}})]}),Object(f.jsxs)("div",{class:"column",children:[Object(f.jsx)("img",{className:"hide-desk",src:q,style:{width:"100%"}}),Object(f.jsx)("img",{className:"hide-mobile",src:G,style:{width:"100%"}}),Object(f.jsx)("img",{src:J,style:{width:"100%"}})]})]})]})},X=a(35),V=[{key:"1",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",name:"XI Commerce",descrip:"All subject in one place.",price:"14500"},{key:"2",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",name:"XII Commerce",descrip:"All subject in one place.",price:"15500"},{key:"3",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",name:"AN INTEGRETED PROGRAM FOR CLASS XI and XII",descrip:"Both college and tuition at one place (Use time smartly with single FEES)",price:"30000"},{key:"4",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",name:"CA Foundation",descrip:"Both college and tuition at one place (Use time smartly with single FEES)",price:"26000"},{key:"5",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",name:"CMA Foundation",descrip:"Both college and tuition at one place (Use time smartly with single FEES)",price:"22000"},{key:"6",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",name:"CSEET",descrip:"Both college and tuition at one place (Use time smartly with single FEES)",price:"18000"},{key:"7",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",name:"CA Intermediate",descrip:"Group 1",price:"31000"},{key:"8",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",name:"CA Intermediate",descrip:"Group 2",price:"29500"},{key:"9",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",name:"CA Intermediate",descrip:"Integrated (1000 Off)",price:"59500"}];t.default=function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(c.a,{}),Object(f.jsx)(x,{}),Object(f.jsx)(O,{}),Object(f.jsxs)("div",{className:"courses_section",id:"courses",children:[Object(f.jsx)("div",{className:"utility_center_text",children:Object(f.jsx)("h2",{className:"about_section__heading utility__bottom-border",children:"Featured courses"})}),Object(f.jsx)("div",{className:"courses__card--container",children:V.map((function(e){return Object(f.jsx)(E,{number:e.key,img:e.img,name:e.name,descrip:e.descrip,price:e.price})}))})]}),Object(f.jsx)(F.a,{}),Object(f.jsx)(H,{}),Object(f.jsx)(W,{}),Object(f.jsx)(X.a,{})]})}},31:function(e,t,a){"use strict";t.a=a.p+"static/media/logo.d097087a.png"},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a(0),a(32);var s=a(31),c=(a.p,a(5));t.a=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{children:[Object(c.jsx)("input",{type:"checkbox",id:"check"}),Object(c.jsx)("label",{for:"check",className:"checkbtn",children:Object(c.jsxs)("div",{className:"button_div",children:[Object(c.jsx)("img",{className:"nav_menu",src:s.a,alt:"logo"}),Object(c.jsx)("h3",{className:"nav_menu--text",children:"Mkbang classes"})]})}),Object(c.jsx)("label",{className:"logo",children:Object(c.jsx)("img",{className:"logo-img",style:{width:"65px"},src:s.a,alt:"logo"})}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"active nav-links",href:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-links",href:"#about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-links",href:"#courses",children:"Courses"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-links",href:"#faculty",children:"Faculty"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"nav-links",href:"#feedback",children:"Feedback"})})]})]})})}},35:function(e,t,a){"use strict";a(0),a(33);var s=a(31),c=a.p+"static/media/phone.0ef43ad0.svg",i=a(5);t.a=function(){return Object(i.jsxs)("div",{className:"footer_section",children:[Object(i.jsxs)("div",{className:"footer_right--div",children:[Object(i.jsx)("img",{className:"footer_logo",src:s.a,alt:"logo"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"footer-title",children:"MKBang Classes Pvt Ltd."}),Object(i.jsxs)("p",{className:"footer-slogan",children:["We Can! and We Did! ",Object(i.jsx)("img",{className:"pen-gif",src:"https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif",alt:"pen"})]})]})]}),Object(i.jsxs)("div",{className:"footer_left--div",children:[Object(i.jsx)("h2",{className:"footer-contact",children:"Contact Us"}),Object(i.jsx)("p",{className:"footer-address",children:"10/09, Tirupati Apartment, Kagwade Mala, Ichalkaranji, Near Runwal Tower, Layker Galli, Ichalkaranji."}),Object(i.jsxs)("div",{className:"phone-div",children:[Object(i.jsx)("img",{className:"phone-svg",src:c,alt:"phone"}),Object(i.jsx)("a",{href:"tel:8275604578",className:"contact-num footer-address",children:"8275604578"})]}),Object(i.jsxs)("div",{className:"phone-div",children:[Object(i.jsx)("img",{className:"phone-svg",src:c,alt:"phone"}),Object(i.jsx)("a",{href:"tel:9405842940",className:"contact-num footer-address",children:"9405842940"})]})]})]})}},36:function(e,t,a){},37:function(e,t,a){"use strict";a(0);var s=a(5);t.a=function(e){return Object(s.jsxs)("div",{className:"student_card",children:[Object(s.jsx)("img",{className:"student_card--image",src:e.img,alt:"student_img"}),Object(s.jsxs)("div",{className:"student_text-container",children:[Object(s.jsx)("div",{className:"student_score student_text",children:e.score}),Object(s.jsx)("div",{className:"student_name student_text",children:e.name})]})]})}},38:function(e,t,a){"use strict";t.a=a.p+"static/media/1.6150cc4d.JPG"},39:function(e,t,a){"use strict";t.a=a.p+"static/media/8.cb04cde2.jpg"},40:function(e,t,a){"use strict";t.a=a.p+"static/media/14.0e8429f5.jpg"},41:function(e,t,a){"use strict";a(0),a(36);var s=a.p+"static/media/akshayKeswani.e9055e0c.jpg",c=a.p+"static/media/nehaLaddha.bb4b47cb.jpg",i=a.p+"static/media/maheshKumar.7f20ba80.jpg",n=a.p+"static/media/Shrikant_sir.369a1cfd.jpg",r=a.p+"static/media/DeepaliMam1.5098de0b.png",o=[{key:"1",name:"ca maheshkumar bang",image:"".concat(i),subject:"Accounts & buniness law",about:"CA by Profession and teacher by passion. He become Big Attraction for large number of students in short span. His friendliness makes him highly accessible to the students for all their difficulties.He simplifies all concepts ensuring that everyone in the class understands them. His attitude towards teaching makes him impactable teacher."},{key:"2",name:"DEEPALI BANG",image:"".concat(r),subject:"Economics & BCK",about:" She presents every point with justifiable reasons and detailed studies. She teaches with full of energy which makes theory subject more interesting and practical. The methods followed by her are being loved by students since she also gets the revision of the concepts along with the explanation in the class itself which instils more confidence among students."},{key:"3",name:"shrikant dayama",image:"".concat(n),subject:"English",about:"More than 10 years experience in teaching English. Well versed in grammar and writing skills. Completed Professional Practice in teaching English, a course of Cambridge University. Trained students in various state level and national level examinations like Olympiad. Focus on making students self-reliant and selg sufficient in the use of English language."},{key:"4",name:"AKSHAY KESWANI",image:"".concat(s),subject:"Mathematics & Statistics",about:"One of the youngest teachers in city, started teaching at age of 18, has friendly teaching attitude towards students. Akshay sir makes the subject of mathematics very easy to understand. He teaches the fundamentals effectively so that students can solve any and every problem with confident."},{key:"5",name:"Neha Laddha",image:"".concat(c),subject:"OCM",about:"CA by Profession and teacher by passion. He become Big Attraction for large number of students in short span. His friendliness makes him highly accessible to the students for all their difficulties.He simplifies all concepts ensuring that everyone in the class understands them. His attitude towards teaching makes him impactable teacher."}],l=a.p+"static/media/tap.dbf6e96f.svg",d=a(5);t.a=function(){return Object(d.jsxs)("div",{className:"Staff_section",id:"faculty",children:[Object(d.jsx)("div",{className:"utility_center_text",children:Object(d.jsx)("h2",{className:"about_section__heading",children:"Staff"})}),Object(d.jsx)("div",{className:"staff_card_container",children:o.map((function(e){return Object(d.jsxs)("div",{className:"staff_card",children:[Object(d.jsxs)("div",{className:"card_side card_side-front card_side-front-1",children:[Object(d.jsx)("div",{className:"card_tap_info",children:Object(d.jsx)("img",{className:"card_tap-icon",src:l,alt:"click"})}),Object(d.jsx)("img",{className:"card-front--img",src:e.image,alt:"image"}),Object(d.jsx)("div",{className:"staff_name",children:e.name})]}),Object(d.jsxs)("div",{className:"card_side card_side-back card_side-back-1",children:[Object(d.jsx)("div",{className:"backside--name",children:e.name}),Object(d.jsx)("hr",{className:"hr"}),Object(d.jsx)("div",{className:"backside--subject",children:e.subject}),Object(d.jsx)("hr",{className:"hr"}),Object(d.jsx)("div",{className:"backside--about",children:e.about})]})]})}))})]})}},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},74:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}}]);
//# sourceMappingURL=3.2e9edd7a.chunk.js.map