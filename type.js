var typed = new Typed('#types', {
    strings: ["Businessman.", "Designer.","Freelancer."],
    stringsElement: null,
		// typing speed
		typeSpeed:40,
		// time before typing starts
		startDelay: 1500,
		// backspacing speed
		backSpeed:30,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,		// false = infinite
	loopCount: 500,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html'
  });
  