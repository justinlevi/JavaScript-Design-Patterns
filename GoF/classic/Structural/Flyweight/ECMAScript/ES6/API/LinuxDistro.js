// ==============================
// ABSTRACT GNU/LINUX DISTRO
// ==============================

export default class LinuxDistro {
    constructor(name) {
        if (new.target !== undefined) {
            throw new Error("You cannot instantiate an abstract class!");
        }
        this._name = name;
    }

    boot() {
        return `${this._name} is booting...`; // string interpolation with template literal
    }
}
