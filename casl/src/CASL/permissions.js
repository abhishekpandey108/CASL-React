import {createMongoAbility,AbilityBuilder} from '@casl/ability';
import access from './access';

export default function defineAbilityFor(user){
    const {can, build} = new AbilityBuilder(createMongoAbility);
console.log("Cn :",can)
    if(user?.role === 'admin'){
        can(access.admin.action, access.admin.subject)
;
    }else{
        can(access.user.action, access.user.subject)   
     }

     return build();
}