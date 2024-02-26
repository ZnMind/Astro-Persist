import { atom } from "nanostores";

export const $users = atom([{ 'First': 'Dan', 'Last': 'Mann', 'Department': 'IS' }]);

export function addUser(user) {
    $users.set([...$users.get(), user]);
}

export function deleteUser(user) {
    let updated = $users.get();

    for (let i = 0; i < updated.length; i++) {
        if (updated[i].First === user.First && updated[i].Last === user.Last) {
            let spliced = updated.splice(i, 1);
            break;
        }
    }

    $users.set([...updated]);
}
