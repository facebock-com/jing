if (self.CavalryLogger) { CavalryLogger.start_js(["Yxlg7"]); }

__d("XFeedSubFollowController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/feed\/profile\/sub_follow\/",{id:{type:"Int"},action:{type:"Enum",enumType:1},location:{type:"Int"},__asyncDialog:{type:"Int"}})}),null);
__d('MProfileSeeFirst',['Bootloader','CSS','DOM','FollowStrings','MRequest','MURI','Stratcom','SubscriptionsHandler','XFeedSubFollowController','$','destroyOnUnload'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var s=void 0,t=void 0,u=void 0,v=void 0,w=void 0,x='unfollow',y='follow',z='see_first',aa='/a/subscriptions/remove',ba='/a/subscriptions/add';function ca(fa,ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa){'use strict';this.$MProfileSeeFirst1=fa;this.$MProfileSeeFirst2=ga;this.$MProfileSeeFirst3=ha;this.$MProfileSeeFirst4=ia;this.$MProfileSeeFirst5=ja.children[0];this.$MProfileSeeFirst6=ka;this.$MProfileSeeFirst7=la;this.$MProfileSeeFirst8=ma;this.$MProfileSeeFirst9=na;this.$MProfileSeeFirst10=oa;this.$MProfileSeeFirst11=false;this.$MProfileSeeFirst12=pa;this.$MProfileSeeFirst13=qa;i.addClass(this.getActiveFollowButton(this.$MProfileSeeFirst6),'selectedOption');j.setContent(this.$MProfileSeeFirst5,this.getFollowString(this.$MProfileSeeFirst6));this.$MProfileSeeFirst14=new o();this.$MProfileSeeFirst14.addSubscriptions(j.listen(fa,'click',null,function(){if(this.$MProfileSeeFirst6===x&&!this.$MProfileSeeFirst11){this.$MProfileSeeFirst1.setAttribute('data-sigil','follow-flyout');this.changeFollowState(y)}this.$MProfileSeeFirst11=!this.$MProfileSeeFirst11;if(!this.$MProfileSeeFirst11)v&&v.hideAwesomizerUpsell();}.bind(this)),j.listen(ga,'click',null,this.changeFollowState.bind(this,x)),j.listen(ha,'click',null,this.changeFollowState.bind(this,y)),j.listen(ia,'click',null,this.changeFollowState.bind(this,z)));r(this.destroy.bind(this))}ca.prototype.setActionBarFollowButton=function(fa){'use strict';if(fa===this.$MProfileSeeFirst6)return;i.removeClass(this.$MProfileSeeFirst1,'following');i.removeClass(this.$MProfileSeeFirst1,'seefirst');i.removeClass(this.$MProfileSeeFirst1,'follow');if(fa===x){i.addClass(this.$MProfileSeeFirst1,'follow')}else if(fa===y){i.addClass(this.$MProfileSeeFirst1,'following')}else i.addClass(this.$MProfileSeeFirst1,'seefirst');var ga=j.find(this.$MProfileSeeFirst1,'*','m-profile-action-button-label');j.setContent(ga,this.getActionBarButtonText(fa))};ca.prototype.changeFollowState=function(fa){'use strict';if(fa===this.$MProfileSeeFirst6)return;if(fa===x)this.$MProfileSeeFirst1.removeAttribute('data-sigil');this.changeFollowStateUI(fa);if(this.$MProfileSeeFirst6===x){var ga=new l(new m(ba)).setData({subject_id:this.$MProfileSeeFirst7,forceredirect:false,location:this.$MProfileSeeFirst13});ga.listen('done',function(ia){if(ia===z){this.changeSubFollowState(ia)}else this.$MProfileSeeFirst6=ia;}.bind(this,fa));ga.listen('error',this.changeFollowStateUI.bind(this,this.$MProfileSeeFirst6));ga.send()}else if(fa===x){var ha=new l(new m(aa)).setData({subject_id:this.$MProfileSeeFirst7,forceredirect:false,location:this.$MProfileSeeFirst13});ha.listen('error',this.changeFollowStateUI.bind(this,this.$MProfileSeeFirst6));ha.listen('done',function(ia){this.$MProfileSeeFirst6=ia}.bind(this,fa));ha.send()}else this.changeSubFollowState(fa);if(this.$MProfileSeeFirst10)if(fa===x||fa===z){this.renderAwesomizerUpsell(fa,this.$MProfileSeeFirst12)}else if(fa===y)v&&v.hideAwesomizerUpsell();};ca.prototype.renderAwesomizerUpsell=function(fa,ga){'use strict';h.loadModules(["React","ReactDOM","MAwesomizerUpsell.react"],function(ha,ia,ja){t=ha;u=ia;if(!w){w=j.create('div');q('page').appendChild(w)}var ka={followState:fa,isWorkUser:ga};v=u.render(t.createElement(ja,ka),w)},'MProfileSeeFirst')};ca.prototype.changeSubFollowState=function(fa){'use strict';if(fa===z)this.$MProfileSeeFirst15=n.listen('revert',null,function(){n.removeCurrentListener();alert(this.$MProfileSeeFirst9);this.changeFollowStateUI(y);this.$MProfileSeeFirst6=y}.bind(this));var ga=p.getURIBuilder().setInt('id',this.$MProfileSeeFirst7).setEnum('action',fa).setInt('location',this.$MProfileSeeFirst13).getURI(),ha=new l(ga);ha.listen('done',function(ia){this.$MProfileSeeFirst6=ia}.bind(this,fa));ha.listen('error',this.changeFollowStateUI.bind(this,this.$MProfileSeeFirst6));ha.send()};ca.prototype.changeFollowStateUI=function(fa){'use strict';var ga=this.getActiveFollowButton(fa);i.removeClass(this.$MProfileSeeFirst2,'selectedOption');i.removeClass(this.$MProfileSeeFirst3,'selectedOption');i.removeClass(this.$MProfileSeeFirst4,'selectedOption');i.addClass(ga,'selectedOption');this.setActionBarFollowButton(fa);j.setContent(this.$MProfileSeeFirst5,this.getFollowString(fa))};ca.prototype.getActionBarButtonText=function(fa){'use strict';if(fa===x){return k.follow}else if(fa===y){return k.followed}else return k.seeFirst;};ca.prototype.getFollowString=function(fa){'use strict';if(fa===x){if(this.$MProfileSeeFirst8){return k.unfollowFriendSubtextMobile}else return k.unfollowNonFriendSubtextMobile;}else if(fa===y){return k.regularFollowSubtextMobile}else return k.seeFirstSubtextMobile;};ca.prototype.getActiveFollowButton=function(fa){'use strict';if(fa===x){return this.$MProfileSeeFirst2}else if(fa===y){return this.$MProfileSeeFirst3}else return this.$MProfileSeeFirst4;};ca.prototype.destroy=function(){'use strict';if(w){u.unmountComponentAtNode(w);j.remove(w);w=null;v=null}this.$MProfileSeeFirst14&&this.$MProfileSeeFirst14.release();this.$MProfileSeeFirst14=null;this.$MProfileSeeFirst15&&this.$MProfileSeeFirst15.remove()};var da=null,ea={init:function fa(ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra){da&&da.destroy();da=new ca(ga,ha,ia,ja,ka,la,ma,na,oa,pa,qa,ra)}};f.exports=ea}),null);
__d('MBreakupUnfriendFlyoutClickListener',['DOM','MRequest','Stratcom'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k={bindListener:function l(m,n){var o=h.listen(m,'click',null,function(){new i(n).send();o.remove()});j.listen('m:page:unload',null,function(){j.removeCurrentListener();o&&o.remove()})}};f.exports=k}),null);
__d('MProfileFriendingToggleButton',['CSS','DOM','MFriendingActionError','Stratcom','destroyOnUnload','ge'],(function a(b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p,q){'use strict';this.$MProfileFriendingToggleButton1=o;this.$MProfileFriendingToggleButton2=p;this.$MProfileFriendingToggleButton3=q;var r=[i.listen(this.$MProfileFriendingToggleButton1,'click',null,this.$MProfileFriendingToggleButton4.bind(this)),k.listen('friending_state_change',null,this.$MProfileFriendingToggleButton5.bind(this))];if(this.$MProfileFriendingToggleButton2)r.push(i.listen(this.$MProfileFriendingToggleButton2,'click',null,this.$MProfileFriendingToggleButton6.bind(this)));l(function(){this.$MProfileFriendingToggleButton1=null;this.$MProfileFriendingToggleButton2=null;while(r.length)r.pop().remove();}.bind(this))}n.prototype.$MProfileFriendingToggleButton4=function(){'use strict';h.hide(this.$MProfileFriendingToggleButton1);this.$MProfileFriendingToggleButton2&&h.show(this.$MProfileFriendingToggleButton2);this.$MProfileFriendingToggleButton7()};n.prototype.$MProfileFriendingToggleButton6=function(){'use strict';this.$MProfileFriendingToggleButton2&&h.hide(this.$MProfileFriendingToggleButton2);h.show(this.$MProfileFriendingToggleButton1)};n.prototype.$MProfileFriendingToggleButton7=function(){'use strict';var o=m('pymkMProfile');o&&i.remove(o)};n.prototype.$MProfileFriendingToggleButton5=function(o){'use strict';var p=o.getData();if(p.userid!==this.$MProfileFriendingToggleButton3)return;if(p.action==='cancel'){this.$MProfileFriendingToggleButton2&&h.hide(this.$MProfileFriendingToggleButton2);h.show(this.$MProfileFriendingToggleButton1)}if(p.error===j.SEND_OUTGOING_REQUEST_ERROR||p.error===j.CONFIRM_INCOMING_REQUEST_ERROR){this.$MProfileFriendingToggleButton6();return}if(p.error===j.CANCEL_OUTGOING_REQUEST_ERROR){this.$MProfileFriendingToggleButton4();return}};f.exports=n}),null);
__d('MProfileIntroCardLogging',['BanzaiLogger','MLegacyDataStore','DOM','destroyOnUnload'],(function a(b,c,d,e,f,g,h,i,j,k){g.init=function(l,m,n,o){var p=j.listen(l,'click',n,function(event){return h.log(m,babelHelpers['extends']({},o,i.get(event.getNode(n))))});k(function(){return p.remove()})}}),null);
__d('MProfileIntroCardSuggestedPrompt',['DOM','MRequest','destroyOnUnload'],(function a(b,c,d,e,f,g,h,i,j){function k(l,m,n,o){'use strict';var p=h.listen(m,'click',null,function(q){h.replace(l,n);new i(o).send();q.stop()});j(function(){return p.remove()})}f.exports=k}),null);
__d('MTimelineSectionLoader',['setTimeoutAcrossTransitions','$','CSS','DOM','MLegacyDataStore','MRequest','Stratcom','MAjaxify','MInViewportManager','MParent'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=false,s={initialized:false,sections_to_load_count:0,listeners:[],deleting_timers:[],SECTION_SIGIL:'timeline-section',HIDDEN_CONTENT_SIGIL:'hidden-content',UNIT_CONTAINER_SIGIL:'unit-container',UNIT_SIGIL:'tlUnit',SECTION_LABEL_SIGIL:'timeline-label',SECTION_LOADER_SIGIL:'section-loader',SECTION_LOADER_BUTTON_SIGIL:'section-loader-button',SHOW_SPINNER_CLASS:'tl_elem_saving',SHOW_HEADER_CLASS:'loadedSectionContent',processNewlyLoadedSection:function t(u){var v=i(u.section_content_id),w=s.getParentSection(v);if(w){s._onSectionAjaxComplete(w);s._loadSection(w,u)}},getParentSection:function t(u){return q.bySigil(u,s.SECTION_SIGIL)},setAutoloadForever:function t(u){r=u},_initSections:function t(){var u=k.scry(document.body,'div','timeline-section');s.sections_to_load_count=u.length;var v=false;for(var w=0;w<u.length;w++){var x=u[w],y=l.get(x);if(y._loaded||(' '+x.className+' ').indexOf(' loadedSection ')>-1){y._loaded=true;s.sections_to_load_count--;j.conditionClass(u[w],'loadedSection',true);var z=s._getSiblingSection(u,w,false);if(z)j.conditionClass(z,'nextSectionLoaded',true);var aa=s._getSiblingSection(u,w,true);if(aa)j.conditionClass(aa,'previousSectionLoaded',true);}if(!v)v=s._autoloadSection(x,false);}},init:function t(){j.conditionClass(document.body,'tlBody',true);s._initSections();s.listeners.push(n.listen('m:onload',null,s._initSections),n.listen('click',s.SECTION_LOADER_BUTTON_SIGIL,s.ajaxSectionListener));s.initialized=true;n.invoke('m-timeline-section-loader:init')},cleanupOnUnload:function t(){while(s.listeners.length)s.listeners.pop().remove();while(s.deleting_timers.length)clearTimeout(s.deleting_timers.pop());s.sections=null;s.initialized=false;j.conditionClass(document.body,'tlBody',false)},_loadSection:function t(u,v){var w=l.get(u);if(!w._hidden)return;w._hidden=false;var x=k.scry(u,'*',s.HIDDEN_CONTENT_SIGIL)[0],y=null;if(v.subsection){var z=s._getSiblingSections(u);if(z[0])y=z[0];}else y=u;var aa=k.scry(x,'div',s.UNIT_SIGIL);if(!aa.length||!s.initialized){s._loadSectionHelper(x,u,y,v)}else p.watchWithBuffer(u,s._loadSectionHelper.bind(null,x,u,y,v),100);},_loadSectionHelper:function t(u,v,w,x){var y=k.scry(u,'*',s.UNIT_SIGIL),z=null,aa=null;if(x.expand_inline){w=v;aa=v;k.insertBefore(v,y);k.remove(v)}else{do z=u.nextSibling;while(z&&z.getAttribute('data-sigil')!==s.SECTION_SIGIL);if(w)aa=k.scry(w,'*',s.UNIT_CONTAINER_SIGIL)[0];if(aa&&y.length){k.appendContent(aa,y);n.invoke('m-timeline-section-loader:onshow',null,k.uniqID(aa))}j.conditionClass(u,'sectionContentHidden',false);var ba=k.scry(v,'div',s.SECTION_LOADER_BUTTON_SIGIL)[0];if(ba){j.conditionClass(ba,'sectionLoaderButton',false);j.conditionClass(ba,s.SHOW_SPINNER_CLASS,false)}}var ca=false;if(z){if(!s._hasClass(z,'loadMoreSection'))v.parentNode.insertBefore(z,v.nextSibling);j.conditionClass(z,'sectionContentHidden',false);if(!y.length)ca=true;if(v!=w)k.remove(v);}else if(v!=w){if(y.length){k.remove(v)}else{var da=k.scry(aa,'div',s.UNIT_SIGIL);if(da.length){var ea=k.scry(v,'div',s.SECTION_LABEL_SIGIL)[1];if(ea)j.conditionClass(ea,'sectionContentHidden',false);s.deleting_timers.push(h(s._fadeoutSection.bind(null,v),1000))}w=v}}else if(!x.expand_inline)if(!y.length)ca=true;if(ca||r)s._autoloadNextSection(w,ca);var fa=v.id+'_dependent',ga=k.scry(document.body,'div',fa);for(var ha=0;ha<ga.length;ha++)j.conditionClass(ga[ha],'sectionContentHidden',false);h(function(ia){s._initSections();n.invoke('m-timeline-rebalance')}.bind(null,y),50);n.invoke('m-timeline-section-loader:complete',null,null)},_autoloadNextSection:function t(u,v){var w=s._getSiblingSections(u)[1];if(w)return s._autoloadSection(w,v);return false},_autoloadSection:function t(u,v){var w=null,x=k.scry(u,'div',s.SECTION_LOADER_SIGIL)[0];if(x&&(l.get(x).autoload||v))w=k.scry(u,'div',s.SECTION_LOADER_BUTTON_SIGIL)[0];if(w){s.ajaxSection(u);return true}return false},_fadeoutSection:function t(u){p.watch(u,s._fadeoutSectionHelper)},_fadeoutSectionHelper:function t(u){j.conditionClass(u,'sectionFading',true);s.deleting_timers.push(h(function(){u.style.opacity=.2;s.deleting_timers.push(h(function(){p.watch(u,function(){k.remove(u);s._initSections()})},1200))},0))},_onSectionAjaxComplete:function t(u){var v=k.scry(u,'div',s.SECTION_LOADER_SIGIL)[0],w=l.get(u);w._ajaxified=true;if(v){var x=v.getAttribute('data-sigil').replace('touchable','');v.setAttribute('data-sigil',x)}w._loaded=true;w._hidden=true},ajaxSectionListener:function t(u){var v=u.getNode(s.SECTION_SIGIL);s.ajaxSection(v,u)},ajaxSection:function t(u,v){var w=l.get(u);if(w._ajaxified)return;s._revealSection(u);var x=k.scry(u,'div',s.SECTION_LOADER_SIGIL)[0],y=l.get(x);j.conditionClass(x,s.SHOW_SPINNER_CLASS,true);o.ajaxify(v?v.getRawEvent():null,x,new m(y.href),null,{error:function z(){j.conditionClass(x,s.SHOW_SPINNER_CLASS,false);if(r){var aa=k.scry(document.body,'div','timeline-section');aa.forEach(s._revealSection);r=false}}})},_revealSection:function t(u){var v=k.scry(u,'div',s.SECTION_LOADER_SIGIL)[0];v&&j.conditionClass(v,s.SHOW_HEADER_CLASS,true)},_getSiblingSections:function t(u){var v=k.scry(document.body,'div','timeline-section'),w=v.indexOf(u);return [s._getSiblingSection(v,w,false),s._getSiblingSection(v,w,true)]},_getSiblingSection:function t(u,v,w){if(v>=u.length||v<0)return null;var x=u[v];while(true){v+=w?1:-1;if(v>=u.length||v<0)break;if(u[v].parentNode===x.parentNode)return u[v];}return null},_hasClass:function t(u,v){return (' '+u.className+' ').indexOf(' '+v+' ')>-1}};f.exports=s}),null);
__d('InitMTimelineSectionLoader',['MTimelineSectionLoader','Stratcom'],(function a(b,c,d,e,f,g,h,i){var j=false,k=function l(m){if(m.section_content_id){h.processNewlyLoadedSection(m);return}function n(){h.cleanupOnUnload();i.removeCurrentListener();j=false}if(!j){h.init();i.listen('m:page:unload',null,n);j=true}};g.main=k}),null);
__d('MProfileTilesLogging',['BanzaiLogger','MLegacyDataStore','DOM','destroyOnUnload'],(function a(b,c,d,e,f,g,h,i,j,k){var l='TimelineExpandedContextLoggerConfig',m='expanded-context-log';g.init=function(n){var o=j.listen(n,'click',m,function(p){return h.log(l,i.get(p.getNode(m)))});k(function(){return o.remove()})}}),null);
__d('MTimelineActionBar',['MLegacyDataStore','MarauderLogger','MParent','Stratcom','destroyOnUnload'],(function a(b,c,d,e,f,g,h,i,j,k,l){var m='hq-profile-logging-action-bar-button';function n(){'use strict';var o=k.listen('click',[m],n.$MTimelineActionBar1);l(function(){return o&&o.remove()})}n.$MTimelineActionBar1=function(o){'use strict';var p=o.getTarget(),q=j.bySigil(p,m);if(q===null)return;var r=h.get(q),s=r['hq-profile-logging'];i.log('profile_high_quality_action',undefined,s)};f.exports=n}),null);
__d('MTimelineCTRLogger',['BanzaiLogger','MLegacyDataStore','Stratcom'],(function a(b,c,d,e,f,g,h,i,j){var k='timeline-ctr-logger';j.listen('click',k,function(l){var m=i.get(l.getNode(k));h.log(m.config,m.data)});f.exports={}}),null);
__d('Clipboard',['UserAgent'],(function a(b,c,d,e,f,g,h){var i={isSupported:function j(){return document.queryCommandSupported instanceof Function&&document.queryCommandSupported('copy')&&!(h.isBrowser('Firefox < 41')||h.isDevice('iPhone'))||h.isBrowser('Chrome >= 43')},copy:function j(k,l){var m=l||document.body;if(!m)return false;var n=true,o=document.createElement('textarea');m.appendChild(o);o.value=k;o.select();try{n=document.execCommand('copy')}catch(p){n=false}m.removeChild(o);return n}};f.exports=i}),null);
__d('MTimelineShareProfile',['Stratcom','MLegacyDataStore','destroyOnUnload','Clipboard','fbt'],(function a(b,c,d,e,f,g,h,i,j,k,l){var m='share_profile_link',n={init:function o(){var p=h.listen('click',m,function(q){var r=i.get(q.getNode(m));if(k.isSupported()&&k.copy(r.uri)){prompt(l._("\u5df2\u5c07\u4ee5\u4e0b\u9023\u7d50\u8907\u88fd\u5230\u4f60\u7684\u526a\u8cbc\u7c3f\u3002"),r.uri)}else prompt(l._("\u6309\u4f4f\u4e0b\u65b9\u7684\u9023\u7d50\u53ef\u9078\u64c7\u548c\u8907\u88fd\u4f4d\u5740\u3002"),r.uri);});j(function(){p.remove()})}};f.exports=n}),null);
__d('MTimelineUnfriendConfirmation',['MLegacyDataStore','Stratcom','MRequest','destroyOnUnload','fbt'],(function a(b,c,d,e,f,g,h,i,j,k,l){var m='unfriend',n=void 0;function o(){if(n)return;n=i.listen('click',m,function(p){var q=h.get(p.getNode(m));new j(q.unfriendAttemptURI).send();var r=l._("\u4f60\u78ba\u5b9a\u8981\u5c07{name}\u5f9e\u670b\u53cb\u540d\u55ae\u4e2d\u5254\u9664\uff1f",[l.param('name',q.shortName)]);if(confirm(r))new j(q.unfriendURI).send();});k(function(){n.remove();n=null})}g.init=o}),null);
__d('MTimelineUnit',['setTimeoutAcrossTransitions','$','CSS','DOM'],(function a(b,c,d,e,f,g,h,i,j,k){var l={hideByID:function m(n){k.hide(i(n))},hideOffScreen:function m(n,o){var p;j.conditionClass(n,'deleting',true);h(j.conditionClass.bind(null,n,'deleted',true),0);if(o)(function(){var q=function r(s){n.removeEventListener(s.type,r,true);o(n)};n.addEventListener('webkitTransitionEnd',q,true)})();},unhideOffScreen:function m(n){k.show(n);h(j.conditionClass.bind(null,n,'deleted',false),0)}};f.exports=l}),null);
__d("TimelineViewportTrackingLogType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({IMPRESSION:"impression",DURATION:"duration"})}),null);
__d('MTimelineViewportTracking',['Banzai','CSS','DataAttributeUtils','FBJSON','MEntstreamViewportTracking','StratcomManager','TimelineViewportTrackingLogType','cx','setTimeout'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';var q,r;q=babelHelpers.inherits(s,l);r=q&&q.prototype;s.init=function(t){m.enableDispatch(document,'scroll');new s().init(t)};s.prototype.__getStreamRoot=function(){this.$MTimelineViewportTracking1=this.$MTimelineViewportTracking1||document.getElementById('timelineBody')||document.getElementById('root');return this.$MTimelineViewportTracking1};s.prototype.getStoryID=function(t){var u=j.getDataFt(t);if(!u)return null;return k.parse(u,f.id).tl_objid};s.prototype.sendDataToLog=function(t){h.post('timeline_feed_tracking',{ft:t,log_type:n.IMPRESSION})};s.prototype.markStoryRead=function(t){p(this.$MTimelineViewportTracking2.bind(this,t),1000)};s.prototype.$MTimelineViewportTracking2=function(t){i.addClass(t,"_1tl-");i.removeClass(t,"_1tl_");i.removeClass(t,"_1tm0")};function s(){q.apply(this,arguments)}f.exports=s}),null);
__d('MTimelineXFriendingButton',['CSS','DOM','Stratcom','MFriendingActionError','destroyOnUnload','ge'],(function a(b,c,d,e,f,g,h,i,j,k,l,m){var n=void 0,o=void 0,p=void 0,q=void 0,r=void 0;function s(){var v=n.style.display!=='none',w=m('pymkMProfile');h.conditionShow(n,!v);h.conditionShow(o,v);w&&i.remove(w);if(!v)q.hide();}function t(v){var w=v.getData();if(w.userid!==r)return;if(w.error===k.SEND_OUTGOING_REQUEST_ERROR||w.error===k.CANCEL_OUTGOING_REQUEST_ERROR)s();if(w.action==='cancel')q.hide();}function u(v,w,x){n=v;o=w.getContext();p=i.find(w.getRoot(),'*','cancel-request-button');q=w;r=x;var y=[j.listen('friending_state_change',null,t),i.listen(n,'click',null,s),i.listen(p,'click',null,s)];l(function(){n=null;o=null;p=null;o=null;while(y.length)y.pop().remove();})}g.init=u}),null);
__d('MUnitFlyout',['$','CSS','DOM','MLegacyDataStore','MParent','MActionBubbleHelper','Stratcom','MTimelineUnit'],(function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=void 0,q={};function r(s){if(p)return;p=s;var t=void 0,u='m-unit-popup-opener',v='hidesUnit',w='deletesUnit',x='reportComponentUnit',y='reportUnit',z='action-title',aa='action-subtitle';function ba(){var ka=l.bySigil(p.getCausalElement(),u),la=k.get(ka),ma=h(la.target);i.conditionClass(ma,'editing',true);var na=p.getRoot(),oa=la.editOptions,pa=j.scry(ia,'a');pa.forEach(function(ra){m.toggleActionBubbleItem(ra,false,'MUnitFlyout',u)});for(var qa in oa){if(oa[qa].rel==='dialog'){da(na,qa,oa[qa].uri)}else ca(na,qa,oa[qa].uri);ea(na,qa,oa[qa].label,oa[qa].subtitle,oa[qa].icon)}t=ma}function ca(ka,la,ma){var na=j.find(ka,'a',la);na.href=ma;na.removeAttribute('rel');n.removeSigil(na,'dialog-link');m.toggleActionBubbleItem(na,!!ma,'MUnitFlyout',la)}function da(ka,la,ma){var na=j.find(ka,'a',la),oa=k.get(na);oa.dialogURI=ma;na.setAttribute('rel','dialog');n.addSigil(na,'dialog-link');m.toggleActionBubbleItem(na,!!ma,'MUnitFlyout',la)}function ea(ka,la,ma,na,oa){var pa=j.find(ka,'a',la);if(ma){var qa=j.find(pa,'div',z);if(qa)qa.textContent=ma;}if(na){var ra=j.find(pa,'div',aa);if(ra)ra.textContent=na;}if(oa){var sa=j.find(pa,'i');sa&&j.replace(sa,oa)}}function fa(){if(t){i.conditionClass(t,'editing',false);t=null}}function ga(event){var ka=event.getNode(v)||event.getNode(w);if(ka){var la=t;if(n.hasSigil(la,x)){var ma=l.bySigil(la,y),na=j.scry(ma,'*',x);if(na.length<2)la=ma;}var oa=event.getNode(w)?j.remove.bind(j,la):null;o.hideOffScreen(la,oa)}p.hide()}function ha(){p&&p.updateIfShown()}var ia=s.getRoot(),ja=[n.listen('m:page:unload',null,function(){while(ja&&ja.length>0)ja.pop().remove();p=null;t=null;ia=null;q={}}),n.listen(['m-timeline-rebalance','m-timeline-section-loader:onshow'],null,ha),s.addListener('beforeshow',ba),s.addListener('hide',fa),j.listen(ia,'click',null,ga)]}g.main=r}),null);
__d('MTimelineYearOverviewClickLogging',['BanzaiLogger','MLegacyDataStore','DOM','destroyOnUnload'],(function a(b,c,d,e,f,g,h,i,j,k){var l='year-overview-logging',m='yearOverviewLoggingData',n=10;function o(p){var q=j.listen(p,'click',l,function(r){var s=r.getNode(l);h.create({delay:n}).log('MTimelineYearOverviewLoggerConfig',i.get(s)[m])});k(q.remove.bind(q))}g.init=o}),null);
__d('MFlyoutAutoHideAfter',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$MFlyoutAutoHideAfter1=null;this.$MFlyoutAutoHideAfter2=i;this.$MFlyoutAutoHideAfter3=null}h.prototype.enable=function(){'use strict';this.$MFlyoutAutoHideAfter1=[this.$MFlyoutAutoHideAfter2.addListener('show',this.$MFlyoutAutoHideAfter4.bind(this)),this.$MFlyoutAutoHideAfter2.addListener('hide',this.$MFlyoutAutoHideAfter5.bind(this))];if(this.$MFlyoutAutoHideAfter2.isShown())this.$MFlyoutAutoHideAfter4();};h.prototype.disable=function(){'use strict';this.$MFlyoutAutoHideAfter5();while(this.$MFlyoutAutoHideAfter1.length)this.$MFlyoutAutoHideAfter1.pop().remove();this.$MFlyoutAutoHideAfter1=null;this.$MFlyoutAutoHideAfter2=null};h.prototype.$MFlyoutAutoHideAfter5=function(){'use strict';this.$MFlyoutAutoHideAfter3&&clearTimeout(this.$MFlyoutAutoHideAfter3);this.$MFlyoutAutoHideAfter3=null};h.prototype.$MFlyoutAutoHideAfter4=function(){'use strict';this.$MFlyoutAutoHideAfter5();this.$MFlyoutAutoHideAfter3=setTimeout(this.$MFlyoutAutoHideAfter2.hide.bind(this.$MFlyoutAutoHideAfter2),this.$MFlyoutAutoHideAfter2.config.auto_hide_after*1000)};f.exports=h}),null);