const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
});

sr.reveal(`.hero-title, .js-type-writer`,{delay: 100});
sr.reveal(`.aboutme-scroll`,{origin: 'left', delay: 200});
sr.reveal(`.pic-justin, .owner, .pic`,{origin: 'right', delay: 400});
sr.reveal(`.pic`,{origin: 'top', delay: 400});
sr.reveal(`#aboutme-justin, #aboutme-2`,{origin: 'bottom', delay: 600});
sr.reveal(`#aboutme-para`,{origin: 'left', delay: 600});
sr.reveal(`#gallery`,{delay: 600});
sr.reveal(`.slider`,{origin: 'bottom', delay: 600});
sr.reveal(`#contact`,{delay: 300});
sr.reveal(`.cell-c, #cell`,{origin: 'left', delay: 300});
sr.reveal(`.email-scroll, #email`,{origin: 'right', delay: 300});
sr.reveal(`.loca-scroll, #loca`,{origin: 'left', delay: 300});