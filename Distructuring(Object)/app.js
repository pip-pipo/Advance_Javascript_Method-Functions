const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    sibilings: {
        sister: 'jane'
    }};


    // const firstname = bob.first;
    // const lastname = bob.last;

    // const sister = bob.sibilings.sister

    // console.log(firstname,lastname,sister)


    const {first,last,city,sibilings:{sister:favourite}} = bob ;
    console.log(first,last,city,sibilings,favourite);
