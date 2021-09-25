const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.hero-title, .js-type-writer`,{delay: 100});
sr.reveal(`.aboutme-scroll`,{origin: 'left', delay: 200});
sr.reveal(`.pic-justin, .owner`,{origin: 'right', delay: 400});
sr.reveal(`#aboutme-para`,{origin: 'left', delay: 600});
sr.reveal(`#gallery`,{delay: 600});
sr.reveal(`.slider`,{origin: 'bottom', delay: 600});
sr.reveal(`#contact`,{delay: 300});
sr.reveal(`.cell-c, #cell`,{origin: 'left', delay: 400});
sr.reveal(`.email-scroll, #email`,{origin: 'right', delay: 400});
sr.reveal(`.loca-scroll, #loca`,{origin: 'left', delay: 400});