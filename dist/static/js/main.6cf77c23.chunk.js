(this.webpackJsonpportal=this.webpackJsonpportal||[]).push([[0],{315:function(e,t,a){e.exports=a(530)},320:function(e,t,a){},321:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},322:function(e,t,a){},331:function(e,t,a){e.exports=a.p+"static/media/logo.cb531ad9.jpg"},334:function(e,t,a){},335:function(e,t,a){e.exports=a.p+"static/media/jum.ae52e272.png"},336:function(e,t,a){},337:function(e,t,a){},338:function(e,t,a){},486:function(e,t,a){},487:function(e,t,a){},488:function(e,t,a){},489:function(e,t,a){},492:function(e,t,a){},530:function(e,t,a){"use strict";a.r(t);var n=a(50),r=a(0),o=a.n(r),i=a(13),l=a.n(i),c=(a(320),a(321),a(322),a(585)),s=a(586),u=a(11),m=a(18),d=a(574),p=a(147);var f=Object(u.b)((function(e){return{auth:e.firebase}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:p.a[500]}}}))(),e.auth?o.a.createElement(o.a.Fragment,null,o.a.createElement(m.c,{style:{color:"black",marginRight:"10px"},to:"/myprofile"},"My Profile")," ",o.a.createElement("a",{style:{color:"black",marginRight:"10px"},href:"",onClick:function(){return e.signOut()}},"Log Out")):null}));function h(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",null,o.a.createElement(m.c,{style:{color:"black",marginRight:"10px"},to:"/login"},"Login")),o.a.createElement("li",null,o.a.createElement(m.c,{style:{color:"black"},to:"/signup"},"Sign Up")))}var b=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),null)((function(e){var t=e.auth,n=t.uid?o.a.createElement(f,null):o.a.createElement(h,null);return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{className:"bg-white fixed-top, mb-1",style:{height:"91px"},bg:"light",variant:"light"},o.a.createElement(m.c,{to:"/"},o.a.createElement(c.a.Brand,{className:"ml-3"},o.a.createElement("img",{width:"90px",src:a(331),alt:""}),o.a.createElement("span",{style:{fontSize:"30px"},className:"ml-3"},"Network"))),o.a.createElement(s.a,{className:"ml-auto"},t.isLoaded&&n)))})),g=(a(334),function(){return o.a.createElement("div",{className:"jumbo",style:{textAlign:"center"}},o.a.createElement("img",{style:{border:"solid 1px white",borderRadius:"20px",marginTop:"0px"},width:"1168px",height:"230px",src:a(335)}))}),E=(a(336),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"leftUl",style:{listStyleType:"none",border:"1px white solid",backgroundColor:"white",width:"190px",borderRadius:"20px"}},o.a.createElement("li",null,o.a.createElement("img",{src:"https://img.icons8.com/material-outlined/24/000000/activity-feed-2.png"}),"Feed"),o.a.createElement("li",null," ",o.a.createElement("img",{src:"https://img.icons8.com/pastel-glyph/64/000000/teacher.png"}),"Mentoring"),o.a.createElement("li",null,o.a.createElement("img",{src:"https://img.icons8.com/android/24/000000/briefcase.png"}),"Jobs"),o.a.createElement("li",null,o.a.createElement("img",{src:"https://img.icons8.com/android/24/000000/picture.png"}),"Photos"),o.a.createElement("li",null,o.a.createElement("img",{src:"https://img.icons8.com/android/24/000000/groups.png"}),"Groups"),o.a.createElement("li",null,o.a.createElement("img",{src:"https://img.icons8.com/android/24/000000/tear-off-calendar.png"}),"Events")))}),x=(a(337),a(33)),v=a.n(x),y=(a(338),function(e){var t=e.notifications;return o.a.createElement("div",{style:{listStyleType:"none",border:"1px white solid",backgroundColor:"white",width:"250px",height:"250px",overflow:"scroll",borderRadius:"20px"},className:"notif"},o.a.createElement("ul",null," ",o.a.createElement("span",{style:{color:"rgb(27,157,226"}}," Last Activities"),t&&t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("span",{style:{display:"block"}},e.user),o.a.createElement("span",null,e.content),o.a.createElement("div",{className:"grey-text note-date"},v()(e.time.toDate()).fromNow()))}))))}),N=a(23),O=a(14),k=(a(486),function(e){var t=e.jobs;return o.a.createElement("div",{style:{listStyleType:"none",border:"1px white solid",backgroundColor:"white",width:"250px",borderRadius:"20px"},className:"jobs"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("div",null,o.a.createElement("span",{style:{color:"white",borderRadius:"9px",backgroundColor:"rgb(197,163,82)",width:"100px",padding:"7px"}},t&&t.length),o.a.createElement("span",{className:"ml-2"},"NEW"))),o.a.createElement("li",{style:{fontSize:"20px"}},"Recent Jobs"),t&&t.map((function(e){return o.a.createElement("ul",null,o.a.createElement("li",{style:{width:"200px"}},o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("span",null,o.a.createElement("img",{style:{width:"45px"},src:e.LogoUrl})),o.a.createElement("span",null,o.a.createElement("span",{style:{color:"black",fontSize:"16px"}},e.Title)," ",o.a.createElement("p",null,e.Company," ")))))})),o.a.createElement("li",{style:{color:"black",fontSize:"18px"}}," ",o.a.createElement("a",{href:""},"View Jobs")," "),o.a.createElement("li",null)))}),P=a(290),C=Object(O.d)(Object(u.b)((function(e){return console.log(e,"kestate"),{jobs:e.firestore.ordered.jobs,notifications:e.firestore.ordered.notifications}})),Object(N.firestoreConnect)([{collection:"jobs"},{collection:"notifications",limit:15,orderBy:["time","desc"]}]))((function(e){var t=e.notifications,a=e.jobs;return console.log("test",a&&a[0].job),o.a.createElement("div",{className:"rightUl"},o.a.createElement("div",null,o.a.createElement(k,{jobs:a&&a[0].job})),o.a.createElement(y,{notifications:t}),o.a.createElement("div",{className:"mt-3 twitterFeed"},o.a.createElement(P.a,{sourceType:"profile",screenName:"recodedofficial",options:{height:550}})))})),j=a(36),w=a(583),F=a(86),S=a(61),L=a(588),U=(a(487),Object(O.d)(Object(u.b)((function(e){return{profile:e.firebase.profile,auth:e.firebase.auth}}),(function(e){return{createFilePost:function(t,a){return e(function(e,t){return function(a,n,r){var o=r.getFirebase,i=r.getFirestore,l=n().firebase.auth.uid,c=n().firebase.profile.firstName,s=n().firebase.profile.lastName,u=o(),m=i(),d="";return n().firestore.ordered.users.map((function(e){return e.id===n().firebase.auth.uid?d=e.posts:null})),null===e?m.collection("PublicPosts").add(Object(S.a)({},t,{createdAt:new Date,authorId:l,authorName:c,authorLastName:s,likes:0,comments:[],UsersLiked:[]})).then((function(e){m.collection("users").doc(l).update({posts:d.concat(e.id)})})).then((function(){a({type:"CREATE_PUBLIC_TASK",text:t})})).catch((function(e){a({type:"CREATE_PUBLIC_TASK_ERROR",text:t})})):u.uploadFile("images",e).then((function(e){return e.uploadTaskSnapshot.ref.getDownloadURL()})).then((function(e){return m.collection("PublicPosts").add(Object(S.a)({},t,{createdAt:new Date,imageUrl:e,authorId:l,authorName:c,authorLastName:s,likes:0,comments:[],UsersLiked:[]})).then((function(e){m.collection("users").doc(l).update({posts:d.concat(e.id)})})).then((function(){a({type:"CREATE_PUBLIC_TASK",text:t})})).catch((function(e){a({type:"CREATE_PUBLIC_TASK_ERROR",text:t})}))}))}}(t,a))}}})))((function(e){var t=Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:p.a[500]}}}))(),a=Object(r.useState)(null),n=Object(j.a)(a,2),i=n[0],l=n[1],c=Object(r.useState)(null),s=Object(j.a)(c,2),u=s[0],m=s[1],f=function(t){return t.preventDefault(),null===i?e.createFilePost(null,{PostText:u}):e.createFilePost(i,{PostText:u})};return o.a.createElement("div",{className:"PostContainer"},o.a.createElement("div",{className:"mainInput",style:{width:"600px",height:"100px",display:"flex",backgroundColor:"white",border:"1px solid white",padding:"10px",borderTopRightRadius:"20px",borderTopLeftRadius:"20px",marginBottom:"10px"}},o.a.createElement(L.a,{style:{top:"10px",width:"60px",height:"60px"},"aria-label":"recipe",className:t.avatar},e.profile.ppUrl?o.a.createElement("img",{width:"100%",src:e.profile.ppUrl}):e.profile.initials&&e.profile.initials),o.a.createElement("div",null,console.log(e,"kes"),o.a.createElement("form",{onSubmit:function(e){return f(e)},autoComplete:"off"},o.a.createElement("span",{id:"addPost",className:"pb-3 hidden"},"Add post"),o.a.createElement(w.a,{multiline:!0,disabled:e.profile.isEmpty,className:"mb-4 ml-4",name:"text",required:!0,onClick:function(){return function(){var e=document.getElementById("submitField"),t=document.querySelector(".mainInput"),a=document.getElementById("closePostField");t.classList.add("marginBot"),a.classList.remove("hidden"),e.classList.remove("hidden")}()},onChange:function(e){return function(e){m(e.target.value),console.log(u)}(e)},style:{width:"450px"},id:"standard-basic",label:"Say hello, ask for help, or just post what's new on your mind."}),o.a.createElement("button",{id:"closePostField",style:{fontSize:"17px"},type:"button",className:"hidden btn btn-primary",onClick:function(){return function(){document.querySelector(".mainInput").classList.remove("marginBot");var e=document.getElementById("submitField"),t=document.getElementById("closePostField");e.classList.add("hidden"),t.classList.add("hidden")}()}},"X"),o.a.createElement("div",{className:"hidden",id:"submitField",style:{backgroundColor:"rgb(247,247,247)",paddingBottom:"50px",display:"block",width:"500px"}},o.a.createElement("div",{style:{borderBottom:"1px solid gray",paddingBottom:"8px",paddingTop:"9px"}},o.a.createElement("input",{disabled:e.profile.isEmpty,onChange:function(e){var t=e.target.files[0];l(t)},class:"btn btn-secondary mb-3 mt-3",type:"file",name:"user[image]",multiple:!1})),o.a.createElement("button",{disabled:e.profile.isEmpty,onClick:function(e){return f(e)},type:"button",class:"btn btn-primary mt-3"},"Submit")," ",e.profile.isEmpty?o.a.createElement("div",{style:{color:"red"}},"To send post please ",o.a.createElement("a",{href:"/login"},"login")," or"," ",o.a.createElement("a",{href:"/signup"},"signup")):null)))))}))),I=(a(488),a(577)),R=a(578),T=a(580),A=a(579),B=a(149),D=a(138),_=a.n(D),W=(a(489),Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:p.a[500]}}})));var z=Object(O.d)(Object(u.b)((function(e){return console.log("state",e),{posts:e.firestore.ordered.PublicPosts,likes:e.firestore.ordered.likes,auth:e.firebase.auth,userProfile:e.firebase.auth.profile,users:e.firestore.ordered.users}}),(function(e){return{postLike:function(t,a,n){return e(function(e,t,a){return function(n,r,o){o.getFirebase;var i=(0,o.getFirestore)(),l=r().firebase.auth.uid,c=a.concat(l),s="";r().firestore.ordered.users.map((function(e){return e.id===r().firebase.auth.uid?s=e.likedPosts:null}));var u=s.concat(e);i.collection("users").doc(l).update({likedPosts:u}).then((function(){i.collection("PublicPosts").doc(e).update({likes:t+1}).then((function(){i.collection("PublicPosts").doc(e).update({UsersLiked:c})}))}))}}(t,a,n))},postDislike:function(t,a,n){return e(function(e,t,a){return function(n,r,o){o.getFirebase;var i=(0,o.getFirestore)(),l=r().firebase.auth.uid,c=a.indexOf(l),s=Object(F.a)(a);s.splice(c);var u="";r().firestore.ordered.users.map((function(e){return e.id===r().firebase.auth.uid?u=e.likedPosts:null}));var m=u.indexOf(e),d=Object(F.a)(u);d.splice(m),i.collection("users").doc(l).update({likedPosts:d}).then((function(){i.collection("PublicPosts").doc(e).update({likes:t-1}).then((function(){i.collection("PublicPosts").doc(e).update({UsersLiked:s})}))}))}}(t,a,n))},createComment:function(t,a){return e(function(e,t){return function(a,n,r){r.getFirebase;var o=(0,r.getFirestore)(),i=n().firebase.auth.uid,l="",c="",s="";n().firestore.ordered.users.map((function(e){return e.id===i?l=e.firstName:null})),n().firestore.ordered.users.map((function(e){return e.id===i?c=e.lastName:null})),n().firestore.ordered.users.map((function(e){return e.id===i?s=e.ppUrl:null}));var u=[];n().firestore.ordered.PublicPosts.map((function(t){return t.id===e?u=t.comments:null}));var m="";n().firestore.ordered.users.map((function(e){return e.id===n().firebase.auth.uid?m=e.madeComments:null}));var d=m.concat({comment:t,date:new Date,post:e}),p={comment:t,authorId:i,authorFirstName:l,authorLastName:c,date:new Date,authorPic:s},f={comments:u.concat(p)};o.collection("PublicPosts").doc(e).update(f).then((function(){o.collection("users").doc(i).update({madeComments:d})}))}}(t,a))}}})),Object(N.firestoreConnect)((function(e){return[{collection:"PublicPosts",orderBy:["createdAt","desc"]},{collection:"users"}]})))((function(e){var t=Object(r.useState)(""),a=Object(j.a)(t,2),n=a[0],i=a[1],l=function(t,a){a.preventDefault(),e.createComment(t,n)},c=e.posts,s=e.users,u=(e.likes,e.auth),d=(e.userProfile,W());return o.a.createElement(o.a.Fragment,null,c&&c.map((function(t){return o.a.createElement(I.a,{style:{marginBottom:"15px",width:"600px",maxWidth:"none",textAlign:"left",color:"black"},className:d.root},o.a.createElement(R.a,{avatar:o.a.createElement(L.a,{"aria-label":"recipe",className:d.avatar},s&&s.map((function(e){if(e.id===t.authorId)return e.ppUrl?o.a.createElement(m.b,{to:{pathname:"/user/".concat(e.id)}}," ",o.a.createElement("img",{width:"100%",src:e.ppUrl})," "):o.a.createElement(m.b,{to:{pathname:"/user/".concat(e.id)}}," ","user.initials"," ")}))),action:o.a.createElement(A.a,{"aria-label":"settings"},o.a.createElement(_.a,null)),title:s&&s.map((function(e){if(e.id===t.authorId)return o.a.createElement(m.b,{to:{pathname:"/user/".concat(e.id)}},e.firstName+" "+e.lastName)})),subheader:v()(t.createdAt.toDate()).calendar()}),o.a.createElement(T.a,null,o.a.createElement(B.a,{variant:"body1",color:"textDark",component:"p"},t.PostText)),o.a.createElement("img",{width:"600px",src:t.imageUrl,alt:""}),o.a.createElement("span",{style:{fontSize:"14px",borderBottom:"1px solid rgb(235,235,235)",marginLeft:"10px",paddingBottom:"8px"}},o.a.createElement("span",{className:"mr-2"},"Likes: ",t.likes),o.a.createElement("span",null," Comments: ",t.comments.length)),o.a.createElement("div",{style:{marginTop:"13px",marginLeft:"10px",display:"block",paddingBottom:"8px",borderBottom:"1px solid rgb(235,235,235)"}},t.UsersLiked&&t.UsersLiked.includes(u.uid)?o.a.createElement("img",{className:"likeBtn",onClick:function(){return a=t.id,n=t.likes,r=t.UsersLiked,void e.postDislike(a,n,r);var a,n,r},width:"24px",src:"https://img.icons8.com/office/16/000000/filled-like.png"}):o.a.createElement("img",{className:"likeBtn",onClick:function(){return a=t.id,n=t.likes,r=t.UsersLiked,void e.postLike(a,n,r);var a,n,r},src:"https://img.icons8.com/material-outlined/24/000000/filled-like.png"})," ","Like"),o.a.createElement("form",{onSubmit:function(e){return l(t.id,e)},action:""},o.a.createElement(w.a,{name:"text",onChange:function(e){return function(e){i(e.target.value),console.log(n)}(e)},style:{width:"560px",marginLeft:"10px",marginBottom:"14px"},id:"standard-basic",label:"Write a comment.."}),o.a.createElement("img",{style:{marginTop:"30px",cursor:"pointer"},onClick:function(e){return l(t.id,e)},src:"https://img.icons8.com/small/16/000000/filled-sent.png"})),o.a.createElement("div",{className:"comments"},0!=t.comments.length?o.a.createElement("span",{style:{textAlign:"left",marginLeft:"10px"}},"Comments:"):null,t.comments&&t.comments.map((function(e){return o.a.createElement("div",{style:{textAlign:"left",marginLeft:"10px"}},o.a.createElement("div",{style:{display:"flex",marginTop:"9px"}},o.a.createElement(L.a,{"aria-label":"recipe",className:d.avatar},e.authorPic?o.a.createElement(m.b,{to:{pathname:"/user/".concat(e.authorId)}},o.a.createElement("img",{width:"100%",src:e.authorPic})):o.a.createElement(m.b,{to:{pathname:"/user/".concat(e.authorId)}},e.authorFirstName[0]+e.authorLastName[0])),o.a.createElement(B.a,{variant:"body1",color:"textDark",component:"p"},o.a.createElement(m.b,{to:{pathname:"/user/".concat(e.authorId)}},e.authorFirstName+" "+e.authorLastName))),o.a.createElement("div",{style:{fontSize:"12px",color:"rgb(173,173,173)"}}," ",v()(e.date.toDate()).calendar()),o.a.createElement(B.a,{variant:"body1",color:"textDark",component:"p"},e.comment))}))))})))})),G=Object(u.b)((function(e){return console.log("state",e),{posts:e.firestore.ordered.PublicPosts,auth:e.firebase.auth,users:e.firestore.ordered.users}}))((function(e){return e.auth.isLoaded?o.a.createElement(z,null," "):o.a.createElement("h1",null,"loading...")})),J=Object(O.d)(Object(u.b)((function(e){return{profile:e.firebase.profile,auth:e.firebase.auth}}),null))((function(e){return o.a.createElement("div",{className:"CenterItems"},o.a.createElement(U,null),e.profile.isEmpty?o.a.createElement("div",{style:{color:"red"}},"To send, like or comment post please ",o.a.createElement("a",{href:"/login"},"login")," or"," ",o.a.createElement("a",{href:"/signup"},"signup")):null,o.a.createElement(G,null))})),K=(a(492),Object(O.d)(Object(u.b)((function(e){return{posts:e.firestore.ordered.PublicPosts}})),Object(N.firestoreConnect)([{collection:"PublicPosts",orderBy:["createdAt","desc"]}]))((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,null),o.a.createElement("div",{style:{marginTop:"20px"}},o.a.createElement("div",{class:"container centerIt"},o.a.createElement("div",{class:"row"},o.a.createElement("div",{class:"col md-3 leftBar"},o.a.createElement(E,null)),o.a.createElement("div",{class:"col md-6"},o.a.createElement(J,null)),o.a.createElement("div",{class:"col md-3"},o.a.createElement(C,null))))))}))),q=a(58),M=a(139),H=a(140),V=a(142),X=a(144),Y=function(e){Object(X.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(M.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={firstName:"",lastName:"",email:"",password:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(H.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.auth,n=t.authError;return a.uid?o.a.createElement(q.a,{to:"/"}):o.a.createElement("div",{className:"container",style:{marginTop:"200px"}},o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"white"},o.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",{htmlFor:"lastName"},"Last Name"),o.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"text",id:"lastName"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",{htmlFor:"firstName"},"First Name"),o.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"text",id:"firstName"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"email",id:"email"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{onChange:function(t){return e.handleChange(t)},type:"password",id:"password"})),o.a.createElement("div",{className:"input-field"},o.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),o.a.createElement("div",{className:"red-text center"},n?o.a.createElement("p",null,n):null))))}}]),a}(r.Component),Z=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,o=n.getFirestore,i=r(),l=o();i.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0],likedPosts:[],friends:[],madeComments:[],createdAt:new Date,posts:[],email:e.email,id:t.user.uid})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(Y),$=function(e){Object(X.a)(a,e);var t=Object(V.a)(a);function a(){var e;Object(M.a)(this,a);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(n.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(H.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.authError;return t.auth.uid?o.a.createElement(q.a,{to:"/"}):o.a.createElement("div",{className:"container",style:{marginTop:"200px"}},o.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"white"},o.a.createElement("h5",{className:"grey-text text-darken-3"},"SignIn"),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{required:!0,type:"email",id:"email",onChange:function(t){return e.handleChange(t)}})),o.a.createElement("div",{className:"input-field"},o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{required:!0,type:"password",id:"password",onChange:function(t){return e.handleChange(t)}})),o.a.createElement("div",{className:"input-field"},o.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),o.a.createElement("div",{className:"red-text center"},a?o.a.createElement("p",null,a):null))))}}]),a}(r.Component),Q=Object(u.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))($),ee=a(141),te=a(291),ae=a(581),ne=a(587),re=a(582),oe=a(584),ie=a(200),le=(a(4),Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:p.a[500]}}})));function ce(e){var t=e.posts,a=le(),n=o.a.useState(!1),r=Object(j.a)(n,2);r[0],r[1];return o.a.createElement(o.a.Fragment,null,t&&t.map((function(e){return o.a.createElement(I.a,{style:{marginBottom:"15px",width:"600px",maxWidth:"none",textAlign:"left",color:"black"},className:a.root},o.a.createElement(R.a,{avatar:o.a.createElement(L.a,{"aria-label":"recipe",className:a.avatar},e.authorName[0]+e.authorLastName[0]),action:o.a.createElement(A.a,{"aria-label":"settings"},o.a.createElement(_.a,null)),title:e.authorName+" "+e.authorLastName,subheader:v()(e.createdAt.toDate()).calendar()}),o.a.createElement(T.a,null,o.a.createElement(B.a,{variant:"body1",color:"textDark",component:"p"},e.PostText)),o.a.createElement("img",{width:"600px",src:e.imageUrl,alt:""}),o.a.createElement("span",{style:{fontSize:"14px",borderBottom:"1px solid rgb(235,235,235)",marginLeft:"10px",paddingBottom:"8px"}},o.a.createElement("span",{className:"mr-2"},"Likes: ",e.likes),o.a.createElement("span",null," Comments: ",e.comments.length)),o.a.createElement("div",{className:"comments"},o.a.createElement("span",{style:{textAlign:"left",marginLeft:"10px"}},"Comments:"),e.comments&&e.comments.map((function(e){return o.a.createElement("div",{style:{textAlign:"left",marginLeft:"10px"}},o.a.createElement("div",{style:{display:"flex",marginTop:"9px"}},o.a.createElement(B.a,{variant:"body1",color:"textDark",component:"p"},e.authorFirstName+" "+e.authorLastName)),o.a.createElement("div",{style:{fontSize:"12px",color:"rgb(173,173,173)"}}," ",v()(e.date.toDate()).calendar()),o.a.createElement(B.a,{variant:"body1",color:"textDark",component:"p"},e.comment))}))))})))}var se=function(e){var t=e.profile,a=e.publicPosts,n=[];return a&&a.map((function(e){t.posts&&t.posts.includes(e.id)&&n.push(e)})),o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,{posts:n}))},ue=function(e){var t=e.profile,a=e.publicPosts,n=[];return a&&a.map((function(e){t.likedPosts&&t.likedPosts.includes(e.id)&&n.push(e)})),o.a.createElement(o.a.Fragment,null,o.a.createElement(ce,{posts:n}))},me=function(e){var t=e.profile,a=e.users,n=[];return a&&t&&a.map((function(e){t.friends.map((function(t){e.id===t&&n.push(e)}))})),console.log("friends:",n),o.a.createElement(o.a.Fragment,null,n&&n.map((function(e){return o.a.createElement("li",null,o.a.createElement("span",null,o.a.createElement(m.b,{to:{pathname:"/user/".concat(e.id)}},e.firstName+" "," ",e.lastName)))})))};function de(e){var t=e.children,a=e.value,n=e.index,r=Object(te.a)(e,["children","value","index"]);return o.a.createElement(B.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},r),a===n&&o.a.createElement(oe.a,{p:3},t))}function pe(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var fe=Object(d.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function he(e){var t=fe(),a=o.a.useState(0),n=Object(j.a)(a,2),r=n[0],i=n[1],l=e.publicPosts,c=e.profile,s=e.users;return o.a.createElement("div",{className:t.root},o.a.createElement(ae.a,{position:"static",color:"default"},o.a.createElement(ne.a,{value:r,onChange:function(e,t){i(t)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},o.a.createElement(re.a,Object.assign({label:"Posts"},pe(0))),o.a.createElement(re.a,Object.assign({label:"Likes"},pe(1))),o.a.createElement(re.a,Object.assign({label:"Friends"},pe(2))))),o.a.createElement(de,{value:r,index:0},o.a.createElement(ie.a,null,o.a.createElement(se,{profile:c,publicPosts:l}))),o.a.createElement(de,{value:r,index:1},o.a.createElement(ie.a,null,o.a.createElement(ue,{profile:c,publicPosts:l}))),o.a.createElement(de,{value:r,index:2},o.a.createElement(me,{users:s,profile:c})))}var be=Object(O.d)(Object(u.b)((function(e){return{publicPosts:e.firestore.ordered.PublicPosts,profile:e.firebase.profile,users:e.firestore.ordered.users}}),(function(e){return{addUserImage:function(t,a){return e(function(e,t){return function(a,n,r){var o=r.getFirebase,i=r.getFirestore,l=o(),c=i();return l.uploadFile("images",e).then((function(e){return e.uploadTaskSnapshot.ref.getDownloadURL()})).then((function(e){return c.collection("users").doc(t).update({ppUrl:e})}))}}(t,a))}}})),Object(N.firestoreConnect)((function(e){return[{collection:"users"},{collection:"PublicPosts",orderBy:["createdAt","desc"]}]})))((function(e){var t=Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{margin:"0 auto",backgroundColor:p.a[500]}}})),a=Object(r.useState)(null),n=Object(j.a)(a,2),i=n[0],l=n[1],c=t(),s=(e.auth,e.profile),u=e.publicPosts,m=e.users;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ee.a,null,o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("div",null,o.a.createElement("h2",null,s.firstName+" "+s.lastName," "),o.a.createElement(L.a,{style:{width:"100px",height:"100px"},className:c.avatar},s.ppUrl?o.a.createElement("img",{width:"100%",src:s.ppUrl}):s.initials&&s.initials)),o.a.createElement("form",{style:{margin:"0 auto",width:"200px"}},o.a.createElement("div",{class:"form-group"},o.a.createElement("label",{for:"exampleFormControlFile1"},"Change Profile Picture: ",o.a.createElement("span",null,"\xa0\xa0")),o.a.createElement("input",{onChange:function(e){var t=e.target.files[0];l(t)},type:"file",class:"form-control-file",id:"exampleFormControlFile1",multiple:!1}),o.a.createElement("button",{onClick:function(t){return function(t,a){return t.preventDefault(),e.addUserImage(i,a)}(t,s.id)},type:"submit"},"Submit"))),o.a.createElement("p",{style:{marginTop:"10px"}},"Joined:"," ",o.a.createElement("span",null,o.a.createElement("p",null," ",s.isLoaded&&v()(s.createdAt.toDate()).calendar()))," ")),o.a.createElement(he,{publicPosts:u,profile:s,users:m})))})),ge=Object(O.d)(Object(u.b)((function(e){return{publicPosts:e.firestore.ordered.PublicPosts,profile:e.firebase.profile,users:e.firestore.ordered.users,auth:e.firebase.auth}}),(function(e){return{addFriends:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),o=a().firebase.auth.uid,i="",l="";a().firestore.ordered.users.map((function(e){return e.id===o?l=e.friends:null})),console.log("authFri",l),a().firestore.ordered.users.map((function(t){return t.id===e?i=t.friends:null}));var c=l.concat(e),s=i.concat(o);r.collection("users").doc(o).update({friends:c}).then((function(){r.collection("users").doc(e).update({friends:s})}))}}(t))},removeFriends:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),o=a().firebase.auth.uid,i="",l="";a().firestore.ordered.users.map((function(e){return e.id===o?i=e.friends:null})),a().firestore.ordered.users.map((function(t){return t.id===e?l=t.friends:null}));var c=i.indexOf(e),s=Object(F.a)(i);s.splice(c);var u=l.indexOf(o),m=Object(F.a)(l);m.splice(u),r.collection("users").doc(o).update({friends:s}).then((function(){r.collection("users").doc(e).update({friends:m})}))}}(t))}}})),Object(N.firestoreConnect)((function(e){return[{collection:"users"},{collection:"PublicPosts",orderBy:["createdAt","desc"]}]})))((function(e){var t=window.location.pathname.split("/").pop(),a=e.users,n=a&&a.find((function(e){return e.id===t})),r=Object(d.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{margin:"0 auto",backgroundColor:p.a[500]}}}))(),i=(e.auth,e.profile),l=e.publicPosts;return n?void 0===n?"User not found":i.id===n.id?o.a.createElement(q.a,{to:"/myprofile"}):o.a.createElement(o.a.Fragment,null,o.a.createElement(ee.a,null,o.a.createElement("h4",{style:{textAlign:"center"}},"Profile"),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("div",null,n.firstName+" "+n.lastName,o.a.createElement(L.a,{style:{width:"70px",height:"70px"},className:r.avatar},n.ppUrl?o.a.createElement("img",{width:"100%",src:n.ppUrl}):n.initials&&n.initials," ")),o.a.createElement("p",null,"Joined:"," ",o.a.createElement("span",null,o.a.createElement("p",null,i.isLoaded&&v()(n.createdAt.toDate()).calendar()))," "),n.friends&&n.friends.includes(i.id)?o.a.createElement("button",{onClick:function(){return e.removeFriends(n.id)},type:"button",class:"btn btn-danger mb-2"},'"Remove Friend :("'):o.a.createElement("button",{onClick:function(){return e.addFriends(n.id)},type:"button",class:"btn btn-primary mb-2"},"Add Friend!")),o.a.createElement(he,{publicPosts:l,profile:n,users:a}))):o.a.createElement("h1",null,"loading")}));var Ee=function(){return o.a.createElement(m.a,null,o.a.createElement(b,null),o.a.createElement(q.d,null,o.a.createElement(q.b,{exact:!0,path:"/signup",component:Z}),o.a.createElement(q.b,{exact:!0,path:"/login",component:Q}),o.a.createElement(q.b,{exact:!0,path:"/",component:K}),o.a.createElement(q.b,{exact:!0,path:"/myprofile",component:be}),o.a.createElement(q.b,{path:"/:id",component:ge})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe={authError:null},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(S.a)({},e,{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(S.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(S.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup success"),Object(S.a)({},e,{authError:t.err.message});default:return e}},ye=a(85),Ne=Object(O.c)({auth:ve,firestore:ye.firestoreReducer,firebase:N.firebaseReducer}),Oe=a(289),ke=a(148),Pe=a.n(ke),Ce=(a(524),a(527),a(531),{apiKey:"AIzaSyAi491Bs560kOay0oi0VOHKJHJZZzu4Y4I",authDomain:"portal-ca653.firebaseapp.com",databaseURL:"https://portal-ca653.firebaseio.com",projectId:"portal-ca653",storageBucket:"portal-ca653.appspot.com",messagingSenderId:"174190244166",appId:"1:174190244166:web:153c072f1ca326af393547",measurementId:"G-D60MXLYM4G"});Pe.a.initializeApp(Ce),Pe.a.firestore();var je=Pe.a,we=Object(O.e)(Ne,Object(O.d)(Object(O.a)(Oe.a.withExtraArgument({getFirebase:N.getFirebase,getFirestore:ye.getFirestore})),Object(ye.reduxFirestore)(je,Ce))),Fe=Object(n.a)({firebase:je,config:Ce,dispatch:we.dispatch,createFirestoreInstance:ye.createFirestoreInstance},"config",{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1});l.a.render(o.a.createElement(u.a,{store:we},o.a.createElement(N.ReactReduxFirebaseProvider,Fe,o.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[315,1,2]]]);
//# sourceMappingURL=main.6cf77c23.chunk.js.map