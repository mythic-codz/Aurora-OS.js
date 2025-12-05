import { useThemeColors } from '../../hooks/useThemeColors';

interface PlaceholderAppProps {
    title: string;
}

export function PlaceholderApp({ title }: PlaceholderAppProps) {
    const { getBackgroundColor, blurStyle } = useThemeColors();

    return (
        <div
            className="h-full flex flex-col items-center justify-center text-white/60"
            style={{
                background: getBackgroundColor(0.4),
                ...blurStyle
            }}
        >
            <div className="text-4xl mb-4 opacity-50">🚧</div>
            <h2 className="text-xl font-medium mb-2">{title}</h2>
            <p className="text-sm opacity-70">Coming soon...</p>
        </div>
    );
}
