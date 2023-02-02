import { Machine, interpret } from "xstate";


const toggleMachine = Machine({
    id: "toggle",
    initial: "inactive",
    states: {
        inactive: { on: { TOGGLE: "active" } },
        active: { on: { TOGGLE: "inactive" } }
    }
});

const toggleService = interpret(toggleMachine).start();
export { toggleService };