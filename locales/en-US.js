import enGB from './en-GB.js';

const spellingChanges = [
    [/\bLicence\b/g, 'License'],
    [/\blicence\b/g, 'license'],
    [/\bEnrolment\b/g, 'Enrollment'],
    [/\benrolment\b/g, 'enrollment'],
    [/\bMinimise\b/g, 'Minimize'],
    [/\bminimise\b/g, 'minimize'],
    [/\bminimised\b/g, 'minimized'],
    [/\bminimises\b/g, 'minimizes'],
    [/\bsynchronise\b/g, 'synchronize'],
    [/\bsynchronisation\b/g, 'synchronization'],
    [/\bwhilst\b/g, 'while'],
];

function useAmericanEnglish(value) {
    if (typeof value === 'string') {
        return spellingChanges.reduce(
            (message, [search, replacement]) => message.replace(search, replacement),
            value
        );
    }

    return Object.fromEntries(
        Object.entries(value).map(([key, child]) => [key, useAmericanEnglish(child)])
    );
}

export default useAmericanEnglish(enGB);
