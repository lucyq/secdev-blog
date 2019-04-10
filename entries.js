entries = [
  {
    "name": "Kathleen Fisher",
    "intro": "Kathleen is an associate prof..",
    "entry": [
      {"question": "How has your experience as a DARPA PM on the HACMs program shaped your interests within security?",
        "answer": "My background is in programming language design and implementation with a focus on domain-specific languages. I went to DARPA being aware of the work on the (seL4) microkernel and the Compcert C compiler. I had the idea of taking the mathematical approaches from those two projects and applying them to operating systems software to produce software that provably doesn’t have many of the kinds of low-hanging fruit vulnerabilities that hackers like to exploit. At DARPA, I became aware of the work of Tadayoshi Kohno and Stefan Savage in breaking into an automobile using five different attack vectors that didn’t require them to physically touch the car and used the networking interfaces that existed to gain access. It occurred to me that a vehicle platform was even more compelling than a cell phone platform in terms of applying these tools and techniques. It also brought into mind the ecosystem of the internet of things and networked computers that have the ability to physically affect the world: cars, robotics, quad-copters, medical devices, pacemakers, insulin pumps, control systems for doors in prisons, and so on. There are tons of papers in Black Hat, for example, where white hat hackers showed that they could break into these systems. A lot of them have the same characteristics in that they’re not necessarily running a ton of software or they’re running software where only a small part is important for proving security guarantees. Right now formal methods are good for verifying a hundred thousand lines of code but beyond that it’s outside the scope of what the techniques could do. In those settings, a hundred thousand lines of code gets you a long way toward having a much more secure system. In knowing about seL4, the Compcert C compiler, and looking at the work of Stefan Savage and Tadayoshi Kohno in breaking into cars and extrapolating from cars to other cyber-physical systems, it looked like there was confluence of software and techniques that were ready to be applied and a compelling need to apply them to get better security. That’s what led me to HACMs and what led me to do a much deeper dive in security than I had done previously. I’m not a security researcher, I’m a programming languages researcher."},
      {"question": "What are novel ways that the field of programming languages is shaping how we think about security and how do you picture that intersection coming together more closely in the future?",
       "answer": "C is the bane of security. The C programming language is used in a lot of low-level code because it directly reflects the underlying machine. When you’re writing low-level code, having direct access to the machine is very important but what we’ve empirically discovered after 50 years is that humans are incapable of writing C code that doesn’t have security-relevant flaws in it. Theoretically it’s possible to write perfect C code and verified systems do produce C code that is flawless in terms of memory vulnerabilities but people seem unable to do it without the machine checking. There are three ways in which programming language technology is relevant. One is the formal verification-based approaches where you have plain raw C code and prove that it doesn’t have vulnerabilities, which is what happens with the seL4 project. Another approach is writing in some higher-level language that has a richer proof-type structure built into it. Rust is an example of this approach. The type system can track some of the relevant memory safety properties. It’s still possible to have bugs in the code and harder to write because you must satisfy the type system but it’s a big step forward compared to C. At an even higher level, you provide a domain specific language where the programmers are writing at a significantly higher level of abstraction and then the compiler is generating the lower-level C code along with a proof that the generated code has desired security properties. In the HACMs program, the Ivory and Tower languages from Galois were able to generate low-level C code and schedule it into tasks. Right now we have case studies that show how to design domain specific languages that can generate code in low-level languages along with correctness proofs but we don’t have yet have a fully worked out story for the general case."}
    ],
    "interviewer": "Lucy Qin",
    "image": "images/cat.jpg"
  },
  {
    "name": "Mike Dodds",
    "intro": "Principal Researcher at Galois",
    "entry": [
      {"question": "What drew you to formal verification?",
        "answer": "The thing that’s exciting to me about formal verification is that you can use it to understand precisely what a piece of software will or won’t to do, without testing it. Software, in general, is regrettably unreliable, and the formal verification can give you strong guarantees that your software really does what you want and that you’re not going to end up being surprised by unwanted bad behavior."}
    ],
    "interviewer": "Lucy Qin",
    "image": "images/cat.jpg"
  },
  {
    "name": "Mike Dodds",
    "intro": "Principal Researcher at Galois",
    "entry": [
      {"question": "What drew you to formal verification?",
        "answer": "The thing that’s exciting to me about formal verification is that you can use it to understand precisely what a piece of software will or won’t to do, without testing it. Software, in general, is regrettably unreliable, and the formal verification can give you strong guarantees that your software really does what you want and that you’re not going to end up being surprised by unwanted bad behavior."}
    ],
    "interviewer": "Lucy Qin",
    "image": "images/cat.jpg"
  },
  {
    "name": "Kathleen Fisher",
    "intro": "Kathleen is an associate prof..",
    "entry": [
      {"question": "How has your experience as a DARPA PM on the HACMs program shaped your interests within security?",
        "answer": "My background is in programming language design and implementation with a focus on domain-specific languages. I went to DARPA being aware of the work on the (seL4) microkernel and the Compcert C compiler. I had the idea of taking the mathematical approaches from those two projects and applying them to operating systems software to produce software that provably doesn’t have many of the kinds of low-hanging fruit vulnerabilities that hackers like to exploit. At DARPA, I became aware of the work of Tadayoshi Kohno and Stefan Savage in breaking into an automobile using five different attack vectors that didn’t require them to physically touch the car and used the networking interfaces that existed to gain access. It occurred to me that a vehicle platform was even more compelling than a cell phone platform in terms of applying these tools and techniques. It also brought into mind the ecosystem of the internet of things and networked computers that have the ability to physically affect the world: cars, robotics, quad-copters, medical devices, pacemakers, insulin pumps, control systems for doors in prisons, and so on. There are tons of papers in Black Hat, for example, where white hat hackers showed that they could break into these systems. A lot of them have the same characteristics in that they’re not necessarily running a ton of software or they’re running software where only a small part is important for proving security guarantees. Right now formal methods are good for verifying a hundred thousand lines of code but beyond that it’s outside the scope of what the techniques could do. In those settings, a hundred thousand lines of code gets you a long way toward having a much more secure system. In knowing about seL4, the Compcert C compiler, and looking at the work of Stefan Savage and Tadayoshi Kohno in breaking into cars and extrapolating from cars to other cyber-physical systems, it looked like there was confluence of software and techniques that were ready to be applied and a compelling need to apply them to get better security. That’s what led me to HACMs and what led me to do a much deeper dive in security than I had done previously. I’m not a security researcher, I’m a programming languages researcher."},
      {"question": "What are novel ways that the field of programming languages is shaping how we think about security and how do you picture that intersection coming together more closely in the future?",
       "answer": "C is the bane of security. The C programming language is used in a lot of low-level code because it directly reflects the underlying machine. When you’re writing low-level code, having direct access to the machine is very important but what we’ve empirically discovered after 50 years is that humans are incapable of writing C code that doesn’t have security-relevant flaws in it. Theoretically it’s possible to write perfect C code and verified systems do produce C code that is flawless in terms of memory vulnerabilities but people seem unable to do it without the machine checking. There are three ways in which programming language technology is relevant. One is the formal verification-based approaches where you have plain raw C code and prove that it doesn’t have vulnerabilities, which is what happens with the seL4 project. Another approach is writing in some higher-level language that has a richer proof-type structure built into it. Rust is an example of this approach. The type system can track some of the relevant memory safety properties. It’s still possible to have bugs in the code and harder to write because you must satisfy the type system but it’s a big step forward compared to C. At an even higher level, you provide a domain specific language where the programmers are writing at a significantly higher level of abstraction and then the compiler is generating the lower-level C code along with a proof that the generated code has desired security properties. In the HACMs program, the Ivory and Tower languages from Galois were able to generate low-level C code and schedule it into tasks. Right now we have case studies that show how to design domain specific languages that can generate code in low-level languages along with correctness proofs but we don’t have yet have a fully worked out story for the general case."}
    ],
    "interviewer": "Lucy Qin",
    "image": "images/cat.jpg"
  },
  {
    "name": "Mike Dodds",
    "intro": "Principal Researcher at Galois",
    "entry": [
      {"question": "What drew you to formal verification?",
        "answer": "The thing that’s exciting to me about formal verification is that you can use it to understand precisely what a piece of software will or won’t to do, without testing it. Software, in general, is regrettably unreliable, and the formal verification can give you strong guarantees that your software really does what you want and that you’re not going to end up being surprised by unwanted bad behavior."}
    ],
    "interviewer": "Lucy Qin",
    "image": "images/cat.jpg"
  },
  {
    "name": "Mike Dodds",
    "intro": "Principal Researcher at Galois",
    "entry": [
      {"question": "What drew you to formal verification?",
        "answer": "The thing that’s exciting to me about formal verification is that you can use it to understand precisely what a piece of software will or won’t to do, without testing it. Software, in general, is regrettably unreliable, and the formal verification can give you strong guarantees that your software really does what you want and that you’re not going to end up being surprised by unwanted bad behavior."}
    ],
    "interviewer": "Lucy Qin",
    "image": "images/cat.jpg"
  }
];
