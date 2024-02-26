import { persistentAtom } from "@nanostores/persistent";

export const $persistentUsers = persistentAtom('users', [], {
    encode(value) {
        return JSON.stringify(value);
    },
    decode(value) {
        try {
            return JSON.parse(value);
        } catch (err) {
            console.log(err);
            return value;
        }
    }
})

export function addPersistentUser(user) {
    $persistentUsers.set([...$persistentUsers.get(), user]);
}

export function deletePersistentUser(user) {
    let updated = $persistentUsers.get();

    for (let i = 0; i < updated.length; i++) {
        if (updated[i].First === user.First && updated[i].Last === user.Last) {
            let spliced = updated.splice(i, 1);
            break;
        }
    }

    $persistentUsers.set([...updated]);
}
