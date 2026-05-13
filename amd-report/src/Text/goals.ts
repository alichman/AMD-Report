
// TODO consider making this broad
export type Goal = {
    title: string;
    content: string;
}

export const goals: Goal[] = [
    {
        title: 'To gain a deep understanding of the technology behind graphics drivers and kernels.',
        content: 'Over the past four months, I\'ve had the chance to dive straight into the inner workings of drivers, kernel debugging, and firmware development. I was assigned my first bug at the end of my first week, and I\'ve been exploring the codebase one issue at a time. While it is a completely different world from my app development background, I\'ve found it to be a very engaging field to explore. It was very daunting to see just how many different processes go on at the same time in a modern graphics card, and just how fast they have to be to be useable with modern applications. However, the more bugs I\'ve tackled, the more pieces of the puzzle have become apparent. With the scale of this product, I find that I could continue to learn for a long time, and speed up in my learning as I go. I plan to keep this goal for my next four months, aiming to explore as much as I can about this technology in my remaining term.'
    },
    {
        title: 'To gain experience with kernel debugging and driver programming, and gain confidence in programming with C.',
        content: 'Driver and firmware debugging is a far more closed off runtime environment to the react apps I\'ve been accustomed to. With the variety of issues I\'ve had to tackle this term, I\'ve been exposed to a wide array of tools, both in software and hardware form. While the learning curve is steep, I\'ve made some great strides in learning how to pick the right tool for each task, though these decisions come easier with more fundamental knowledge of the systems. As mentioned in my first reflection, I still have a lot to learn about graphics, and I look forward to gaining a more instinctual understanding of the tools at my disposal.'
    },
    {
        title:'To gain a better understanding of corporate structures, as well as the balance of friendly and professional tone when in a more formal setting.',
        content:'My very first bug ended up involving over 15 people from multiple countries. Because of this I had to quickly get familiar with who to speak with about which issue. Over these four months I\'ve built a solid flow for finding the right person for any problem. Team events have been very helpful for interacting with coworkers in a more casual context, and I\'ve found myself become a lot closer with my team.'
    },
    {
        title:'Become more efficient with multitasking and context switching',
        content:'Context switching at AMD is, while similar in concept, a much more demanding task to what I\'ve previously experienced. Because of the hardware nature of tasks, jumping between them often involves assembling hardware, gathering displays, and setting up new debugging environments. While more time consuming, I find it to be an engaging touch to a necessary process. The act of setting up a system to get back to a task I haven\'t worked on in a bit often reminds me of my previous progress, and lets me get back into the flow of the task quicker once the setup is complete. I believe I\'ve gotten fairly proficient with my context switching, though I rarely work on more than two issues at once at the moment.'
    },
    {
        title: 'To gain experience in working on hardware issues with a global team',
        content: 'AMD is not the first international team I\'ve worked in, but it is by far the largest. Additionally, teams in different countries, though often working together, generally have different contexts on the project at hand. It was a change to get used to, and I was exposed to it rather quickly - My very first bug involved a system that was only found in Shanghai. I had to organize remote debugging, discussed possible root causes and symptoms of the issue with another engineer in an opposing time zone, and eventually even had the hardware shipped to me to resolve the issue. Since then, I\'ve worked with engineers and testers all around the world, and it has become more of a standard part of the job.'
    }
]