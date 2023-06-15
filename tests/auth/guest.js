'use strict';
import Stretch from "../../src/stretch.js";

async function main() {

    console.log("Test JS GUEST")

//const Stretch = require('stretch-api') //= require('../../src/stretch')

    //'2f9445b3-5266-45cd-8a85-d5c3fff69781'
    let clientId;
    var stretch = new Stretch('2f9445b3-5266-45cd-8a85-d5c3fff69781')

    console.log(stretch)



    //console.log(guest)

    //console.log(await stretch.auth.getUser())
    let guest = await stretch.login('bell', '123456')
    console.log('GUEST:', guest)

    const coaches = await stretch.admin.getCoaches()

    console.log(coaches)


    for (let i=0; i< 1; i++) {
        //let guest = await stretch.login('bell', '123456')
        //let coaches = await stretch.search.search()
        //let coaches_count = await stretch.search.count()
        //console.log(coaches_count)
    }

    /*

    let coaches = await stretch.search.search()
    let coaches_count = await stretch.search.count()


    for( const idx in coaches){
        console.log(`Coach: ${coaches[idx].coachId} ${coaches[idx].firstName}`)
        const coach_info = await stretch.coach.getCoachProfile(coaches[idx].coachId)
        console.log(coach_info)

    }
    */
    //console.log(coaches)

    //console.log(await stretch.auth.putUser({description: "I change it from API call"}))

}


main()