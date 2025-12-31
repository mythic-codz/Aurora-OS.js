import { AppMenuConfig } from '../types';

export const mailMenuConfig: AppMenuConfig = {
    menus: ['File', 'Edit', 'View', 'Mailbox', 'Message', 'Window', 'Help'],
    items: {
        'Mailbox': [
            { label: 'New Mailbox', action: 'new-mailbox' },
            { type: 'separator' },
            { label: 'Online Status', action: 'toggle-online' }
        ],
        'Message': [
            { label: 'New Message', shortcut: '⌘N', action: 'new-message' },
            { type: 'separator' },
            { label: 'Reply', shortcut: '⌘R', action: 'reply' },
            { label: 'Reply All', shortcut: '⇧⌘R', action: 'reply-all' },
            { label: 'Forward', shortcut: '⇧⌘F', action: 'forward' }
        ]
    }
};

export const calendarMenuConfig: AppMenuConfig = {
    menus: ['File', 'Edit', 'View', 'Window', 'Help'],
    items: {
        'View': [
            { label: 'Day', shortcut: '⌘1', action: 'view-day' },
            { label: 'Week', shortcut: '⌘2', action: 'view-week' },
            { label: 'Month', shortcut: '⌘3', action: 'view-month' },
            { label: 'Year', shortcut: '⌘4', action: 'view-year' }
        ]
    }
};

export const videosMenuConfig: AppMenuConfig = {
    menus: ['File', 'Edit', 'View', 'Playback', 'Window', 'Help'],
    items: {
        'Playback': [
            { label: 'Play/Pause', shortcut: 'Space', action: 'play-pause' },
            { type: 'separator' },
            { label: 'Increase Volume', shortcut: '⌘↑', action: 'volume-up' },
            { label: 'Decrease Volume', shortcut: '⌘↓', action: 'volume-down' },
            { type: 'separator' },
            { label: 'Enter Full Screen', shortcut: '⇧⌘F', action: 'fullscreen' }
        ]
    }
};
