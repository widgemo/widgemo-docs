import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';
import IconSystemColorMode from '@theme/Icon/SystemColorMode';
import styles from '@docusaurus/theme-classic/lib/theme/ColorModeToggle/styles.module.css';

type ColorMode = 'light' | 'dark' | null;

type ColorModeToggleProps = {
  className?: string;
  buttonClassName?: string;
  respectPrefersColorScheme: boolean;
  value: ColorMode;
  onChange: (mode: ColorMode) => void;
};

function getNextColorMode(
  colorMode: ColorMode,
  respectPrefersColorScheme: boolean,
): ColorMode {
  if (!respectPrefersColorScheme) {
    return colorMode === 'dark' ? 'light' : 'dark';
  }

  switch (colorMode) {
    case null:
      return 'light';
    case 'light':
      return 'dark';
    case 'dark':
      return null;
    default:
      throw new Error(`unexpected color mode ${colorMode}`);
  }
}

function getSwitchActionLabel(nextColorMode: ColorMode): string {
  switch (nextColorMode) {
    case null:
      return translate({
        message: 'Switch to system mode',
        id: 'theme.colorToggle.action.system',
        description: 'Action label to switch to system color mode',
      });
    case 'light':
      return translate({
        message: 'Switch to light mode',
        id: 'theme.colorToggle.action.light',
        description: 'Action label to switch to light color mode',
      });
    case 'dark':
      return translate({
        message: 'Switch to dark mode',
        id: 'theme.colorToggle.action.dark',
        description: 'Action label to switch to dark color mode',
      });
    default:
      throw new Error(`unexpected next color mode ${nextColorMode}`);
  }
}

function CurrentColorModeIcon(): React.ReactElement {
  return (
    <>
      <IconLightMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.lightToggleIcon)}
      />
      <IconDarkMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.darkToggleIcon)}
      />
      <IconSystemColorMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.systemToggleIcon)}
      />
    </>
  );
}

function ColorModeToggle({
  className,
  buttonClassName,
  respectPrefersColorScheme,
  value,
  onChange,
}: ColorModeToggleProps): React.ReactElement {
  const isBrowser = useIsBrowser();
  const nextColorMode = getNextColorMode(value, respectPrefersColorScheme);
  const actionLabel = getSwitchActionLabel(nextColorMode);

  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
          buttonClassName,
        )}
        type="button"
        onClick={() => onChange(nextColorMode)}
        disabled={!isBrowser}
        title={actionLabel}
        aria-label={actionLabel}
      >
        <CurrentColorModeIcon />
      </button>
    </div>
  );
}

export default React.memo(ColorModeToggle);