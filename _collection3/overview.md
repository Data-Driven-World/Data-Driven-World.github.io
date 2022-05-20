---
title: Overview
permalink: /collection3/overview
key: collection3-overview
layout: article
nav_key: collection3
sidebar:
   nav: collection3
license: false
aside:
   toc: true
show_edit_on_github: false
show_date: false
---

Here is where you will find Lab handouts. Will be updated as time progresses. 



# Beta Datapath

## $$\beta$$ Trivia (Basic)
1.  In an unpipelined Beta implementation, when is the signal `RA2SEL` set to `1`?

	<div cursor="pointer" class="collapsible">Show Answer</div><div class="content_answer"><p>
	The <code>RA2SEL</code>  signal is set to <code>1</code> when executing a <code>ST</code> instruction. When <code>RA2SEL</code> is <code>1</code> the 5-bit <code>Rc</code> field of the instruction is sent to the <code>RA2</code> port of the register file, causing <code>Reg[Rc]</code> to be sent to the <strong>write data port of main memory.</strong>
	</p></div><br>

2. In an unpipelined Beta implementation, when executing a `BR(foo,LP)` instruction to call procedure `foo`, what should `WDSEL` should be set to?

	<div cursor="pointer" class="collapsible">Show Answer</div><div class="content_answer"><p>
	<code>BR(foo,LP)</code> is a <i>macro</i> for <code>BEQ(R31,foo,LP)</code>. All <code>BNE/BEQ</code> instructions save the address of the following instruction in the specified destination register (<code>LP</code> in the example instruction). So <code>WDSEL</code> should be set <code>0</code>, selecting the output of the <code>PC+4</code> logic as the data to be <strong>written into the register file.</strong>
	</p></div><br>

3. The **minimum clock period** of the unpipelined Beta implementation is determined by the *propagation* *delays* of the datapath elements and the amount of time it takes for the **control signals to become valid**. **Which** of the following select signals should become valid first in order to ensure the smallest possible clock period: `PCSEL, RA2SEL, ASEL, BSEL, WDSEL, WASEL`?
	
	<div cursor="pointer" class="collapsible">Show Answer</div><div class="content_answer"><p>
	To ensure the <strong>smallest</strong> possible clock period <code>RA2SEL</code> should become valid first. The <code>RA2SEL</code> mux must produce a <strong>stable register address</strong> before the register file can do its thing. All other control signals affect logic that operates <strong>after</strong> the required register values have been accessed, so they don't have to be valid until <i>later</i> in the cycle.
	</p></div><br>


## $$\beta$$ Assembly Language (Basic)

  

What does the following piece of Beta assembly do? Hand assemble the beta **assembly language** into **machine language**. 
  
```cpp
I = 0x5678
B = 0x1234

LD(I,R0) -- (1)
SHLC(R0,2,R0) --  (2)
LD(R0,B,R1) -- (3)
MULC(R1,17,R1) -- (4)
ST(R1,B,R0)  -- (5)
```
Finally, **what is the result stored in R0?**



<div cursor="pointer" class="collapsible">Show Answer</div>
<div class="content_answer"><p>
The machine language is:

<div class="class=language-cpp highlighter-rouge">
<div class="highlight">
<pre class="highlight"><code>I = 0x5678
B = 0x1234
0x601F5678 || LD(R31,I,R0) -> 011000 00000 11111 0101 0110 0111 1000 
0xF0000002 || SHLC(R0,2,R0) -> 111100 00000 00000 0000 0000 0000 0010 
0x60201234 ||LD(R0,B,R1) -> 011000 00001 00000 0001 0010 0011 0100
0xC8210011 ||MULC(R1,17,R1) -> 110010 00001 00001 0000 0000 0001 0001
0x64201234||ST(R1,B,R0) -> 011001 00001 00000 0001 0010 0011 0100
</code></pre></div>
</div>

Explanation:
<ul>
<li>  <strong>Line 1:</strong> move the content of the memory unit at <code>EA=I</code> to register <code>R0</code></li>
<li>  <strong>Line 2:</strong> the content of <code>R0</code> is multiplied by 4 and stored back at register <code>R0</code></li>
<li>  <strong>Line 3:</strong> move the content of memory address <code>EA</code>: <code>EA</code>= <code>B</code> + content of register  <code>R0</code>; to register <code>R1</code>.</li>
<li>  <strong>Line 4:</strong> The content of register <code>R1</code> is multiplied by 17 and stored back at register <code>R1</code>.</li>
<li>  <strong>Line 5:</strong> Store / copy the content of register R1 to the memory unit with address <code>EA</code>: <code>EA</code>= <code>B</code> + content of register <code>R0</code>.</li>
</ul>
The result of <code>R0</code> is the content of memory address I: <code>Mem[I]</code> multiplied by 4.
</p></div><br>