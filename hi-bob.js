class Role {
    constructor(title, effectiveFrom) {
        this.title = title
        this.effectiveFrom = effectiveFrom
    }

    getEffectiveFrom() {
        return this.effectiveFrom;
    }

    getTitle() {
        return this.title
    }
}

/**
 * Calculates what role an employee had per given set of dates
 * @param history Employee role history sorted by the effectiveFrom property in descending order
 * @param dates list of dates
 */
function getRolesByDate(history, dates) {
    const map = new Map();

    dates.sort((a,b) => b-a);

    dates.forEach(date => {
        map.set(date, history.find(item => item.getEffectiveFrom() <= date) || new Role('N/A', date));
    });

    return map;
}

const history = [
    new Role("Team Leader", new Date(2020, 8, 1)),
    new Role("Fullstack developer", new Date(2016, 5, 15)),
    new Role("Frontend developer", new Date(2015, 11, 17))
]

const dates = [
    new Date(2021, 1, 1),
    new Date(2016, 6, 1),
    // new Date(2015, 12, 1),
    new Date(2014, 1, 1),
]

const rolesByDates = getRolesByDate(history, dates)

rolesByDates.forEach((role,date) => console.log(`date = ${date}, role = ${role.getTitle()}`))