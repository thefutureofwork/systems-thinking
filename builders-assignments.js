/* Future Systems Thinking: Vincent McNeeley, "Why the Future Belongs to Builders" (Oct 13, 2026).
   Added Nov 26, 2026. Folded into four EXISTING tasks only: no new cards, deadlines,
   submissions or grade categories. Loaded after weeks-data.js, before the schedule renders.
   The full article is read once, in Week 3 (Spring Festival gives extra time). Week 6 reuses
   the Week 3 notes, so it adds no new reading.
   Copyright-safe: external link and attribution only; short quoted phrases only. */
(function(){
if(typeof WEEKS==="undefined")return;
function week(n){return WEEKS.filter(function(w){return w.n===n})[0]}
function task(n,test){var w=week(n);return w?w.k.filter(test)[0]:null}
function swap(t,oldS,newS){if(t.o.indexOf(oldS)>-1){t.o=t.o.replace(oldS,newS)}else{t.o+="<br>"+newS}}
var art="<a href='https://futuresystemsthinking.com/ideas/why-the-future-belongs-to-builders' target='_blank' rel='noopener'>Vincent McNeeley, <i>Why the Future Belongs to Builders</i></a>";
var credit=" Adapted from "+art+", Future Systems Thinking, 2026.";

/* Week 3: read the whole article once; signal card inside the existing Topic brainstorm. */
var brain=task(3,function(t){return t.n==='Topic brainstorm'});
if(brain){
 brain.n="Topic brainstorm and signal card";
 brain.m=55;
 brain.o="List three community or global challenges you care about. For each, note one question you would like to answer.<br><b>Read:</b> "+art+" in full (a short article, about 10 minutes). Focus on <i>What Builders Do Differently</i>. Make two or three notes on <i>Who Gets to Build</i> and <i>The Barrier to Building Has Collapsed</i>: you will use them in Week 6, so there is no new reading then.<br><b>Signal card:</b> turn <b>one</b> of your three entries into a <b>150-word signal card</b> about a small change you have noticed on campus or in your community: a repeated workaround, a new habit, or a service people struggle to use.<br><b>1.</b> Describe two specific observations: what you saw or heard, where, and when.<br><b>2.</b> Explain what wider change they <i>may suggest</i>.<br><b>3.</b> Give one alternative explanation.<br><b>4.</b> Name the evidence you still need.<br>Use cautious language: <i>may suggest</i>, <i>could reflect</i>, <i>does not yet establish</i>. A signal is a starting question, not a trend you have proved.";
 brain.s="Student Folder &rarr; Video Project. The signal card replaces one brainstorm entry; keep your article notes in the same folder. No separate submission.";
 brain.w="Your proposal is due in Week 4. A carefully observed signal often leads to a sharper research question than a broad topic. Keeping observation separate from interpretation is the same move as the events and patterns layers of the Iceberg. The article is read during the Spring Festival weeks so it does not add to Week 6."+credit;
}

/* Week 6: test the article's claim using Week 3 notes. No new reading. */
var opp=task(6,function(t){return t.n.indexOf('Opportunity loops')===0});
if(opp){
 var step5="<br><b>5. Test a claim.</b> Bring your Week 3 notes on McNeeley&rsquo;s article (no new reading). With a partner, test his claim that &ldquo;the barrier to building has collapsed.&rdquo; Who has more opportunity to build now? Who still faces barriers of time, money, language, access, or institutional permission? Use your loop to explain how an early advantage could grow.";
 if(opp.o.indexOf("<br><b>Make:</b>")>-1){opp.o=opp.o.replace("<br><b>Make:</b>",step5+"<br><b>Make:</b>")}else{opp.o+=step5}
}
var r6=task(6,function(t){return t.n.indexOf('Reading 6:')===0});
if(r6){
 swap(r6,"Explain one mechanism that could sustain the gap and what evidence would be needed to test it.",
 "Then write a <b>150-word qualified response</b> to McNeeley&rsquo;s claim that &ldquo;the barrier to building has collapsed,&rdquo; using your Week 3 notes and the class discussion. Say where you agree, name one group that may still face barriers, explain one mechanism from the opportunity loop that could sustain the gap, and say what evidence would test it. Use qualifiers such as <i>for some students</i>, <i>in part</i>, or <i>not yet</i>.");
 r6.m=110;
 r6.w+=" The qualified response practices evaluating a confident claim: accept what the evidence supports and limit what it does not. You read the article in Week 3, so this adds writing, not reading."+credit;
}

/* Week 10: the existing leverage-point task becomes a small prototype plus rationale. */
var r10=task(10,function(t){return t.n.indexOf('Reading 10:')===0});
if(r10){
 swap(r10,"Choose one leverage point for your project topic and explain why it could work.",
 "Then build the <b>smallest useful response</b> to one problem in your project topic. Reread the short section <i>Start Building</i> in "+art+".<br><b>Make:</b> one rough prototype, such as a clearer information sheet, an accessible sign-up form, a redesigned service flow, or a paper mock-up. No coding is required. AI tools are optional and must follow the <a href='ai-use.html'>AI Use Guide</a>.<br><b>Write a 100-word rationale:</b> <b>1.</b> Which leverage point, connection, or rule does it change? <b>2.</b> Who should help design it? <b>3.</b> What improvement would you look for? <b>4.</b> What unintended consequence might follow?<br>A prototype is a proposal, not proof that it works.");
 r10.s="Student Folder &rarr; Week 10. Upload a photo or file of your prototype with the rationale.";
 r10.m=105;
 r10.w+=" Meadows helps you choose where to intervene; building a rough first version gives you something real to test. Keep it: you will test it with a classmate in Week 12."+credit;
}

/* Week 12: peer test and revision note inside the existing storyboard. */
var sb=task(12,function(t){return t.n==='Video Storyboard / Draft'});
if(sb){
 sb.o+="<br><b>Peer test (in class, Wed Apr 21):</b> show your Week 10 prototype to a classmate. Ask them to explain how they would use it, then to name one barrier or one assumption they question. Note their feedback accurately before you decide what to change.<br><b>Add to your storyboard:</b> a before-and-after image of the prototype and a <b>100-word revision note</b>: the feedback, what you changed, and why. Use the revised prototype in your conclusion if it fits your research question.";
 sb.m=135;
 sb.w+=" A quick peer test shows whether your response works for someone other than you."+credit;
}
})();
