"use client";

import { Switch } from "@nextui-org/react";
import React, { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

const Switcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (
    isSelected: boolean,
    className: string
  ): ReactNode => {
    if (isSelected) {
      setTheme("light");
      return <SunIcon className={className} />;
    } else {
      setTheme("dark");
      return <MoonIcon className={className} />;
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected={theme === "light" ? false : true}
      size="lg"
      color="warning"
      thumbIcon={({ isSelected, className }) =>
        handleThemeChange(isSelected, className)
      }
    />
  );
};

export default Switcher;
