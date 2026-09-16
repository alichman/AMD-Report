
// TODO consider making this broad
export type Goal = {
    title: string;
    content: string;
}

export const goals1: Goal[] = [
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

export const goals2: Goal[] = [
    {
        title: 'To gain a deep understanding of the technology behind graphics drivers and kernels.',
        content: 'During my first term, I spent most of my time working on the power saving features in the firmware. During my second term, I instead focus on multi plane management and colour correction. With these issues power management still played a key role, and my added context of this helped me get a clearer view of the driver connection as a whole. Additionally, I payed attention to issues worked on by my colleagues, and participated in their work to further explore the various segments of our drivers. I also aided other firmware teams on site when I could, which helped me gain an additional area of expertise when exploring our firmware\'s interactions with other hardware blocks.\n'
    },
    {
        title: 'Improve coding practices',
        content: 'When I first starting working at AMD, I found it challenging to follow the intricate commit formats required to submit a pull request. To streamline the process, I wrote a script that formats commits titles, and maintained it every time i encountered a new case with additional rules. Similarly, every new code submission that addressed a new area of the drivers, which took additional steps to submit. I\'ve taken the time to perfect and improve on each one. Additionally, with more and more of the codebase explored, I had a better idea of where to pull references from.\n'
    },
    {
        title: 'Making progress on driver issues independently\n',
        content: 'As mentioned in Goal #1, my understanding of the driver grew significantly over my second term. Because the first thing to do is to isolate for the block at fault, the initial process starting coming naturally to me, as my understanding of each block improved. From there, I got more familiar with development tools at my disposal to help myself get unstuck. This included searching through documentation more efficiently, as well as using the right AI tools to analyze any logs I can collect. With all of these techniques, I found that I needed more assistance significantly less often, and was able to complete tasks on my own.\n'
    },
    {
        title: 'Communicating technical knowledge\n',
        content: 'Even after one term at AMD, I found that I often had issues explaining my problems to others. I would forget terms and explain symptoms in confusing and contradicting ways, which would make seeking assistance very difficult. Over time, I began seeking opportunities to speak with coworkers of the same level of expertise as me about their issues. I found that the more I spoke with them, the more often they\'d mention an issue I was familiar with. In time, I was confident enough in broader areas of our code that I was able to assist a new hire with getting set up for development, as well as his first few issues. I found that by being able to explain what I understand, I was able to reinforce my knowledge and gain confidence in my ability to learn new things.\n'
    },
    {
        title: 'Organization with equipment\n',
        content: 'A large part of my role at AMD involved hardware - Due to the low-level nature of my tasks, much of my time was spent putting together test systems using appropriate hardware, and testing using physical debugging systems. In my first term, I\'ve worked with a coworker who had a deep understanding of our resources, and took charge of organizing our stores. Working with him made setting up significantly more efficient, and I resolved to gain a better understanding of the physical half of the job during my second term.\n' +
            'I began by taking opportunities to assist remote workers with setting up. Eventually, I became the go-to of many engineers for putting together systems, as I was always quick to respond. With time, I became more efficient in my search for equipment, as i began keeping track of who borrowed equipment, and who to message for certain categories of gear. Additionally, I took part in the organization of newly shipped equipment, and the reorganization of older equipment, making me significantly more aware of what we had in stock, and where to find it. This knowledge allowed for my own work to progress much faster, as the tedious search for specific hardware became a quick task, allowing me to focus on the bug at hand.'
    }
]