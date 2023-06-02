'use strict';
import Stretch from "../../src/stretch.js";

async function main() {

    console.log("Test JS GUEST")

//const Stretch = require('stretch-api') //= require('../../src/stretch')

    //'2f9445b3-5266-45cd-8a85-d5c3fff69781'
    var stretch = new Stretch()

    console.log(stretch)


    let guest = await stretch.login()
    console.log(guest)

    console.log(await stretch.auth.getUser())

    let coaches = await stretch.search.search()

    let coaches_count = await stretch.search.count()

    console.log(coaches_count)

    for( const idx in coaches){
        console.log(`Coach: ${coaches[idx].coachId} ${coaches[idx].firstName}`)
        const coach_info = await stretch.coach.getCoachProfile(coaches[idx].coachId)
        console.log(coach_info)

    }

    //console.log(coaches)

    //console.log(await stretch.auth.putUser({description: "I change it from API call"}))

}


main()