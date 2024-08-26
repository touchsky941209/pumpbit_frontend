"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from ".";
import { Checkbox } from "../ui/checkbox";

export default function StakeBPTModal() {
  const [checkedStates, setCheckedStates] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
  });

  const handleCheckboxChange = (checkbox: string, checked: any) => {
    setCheckedStates((prev) => ({
      ...prev,
      [checkbox]: checked,
    }));
  };

  return (
    <div>
      <DialogContent className="bg-gradient-bg flex flex-col gap-y-3 text-white max-w-xl">
        <DialogTitle>Stake BPT</DialogTitle>
        <div className="mt-6"></div>
        <div className="rounded-3xl border border-border bg-secondary p-5">
          <div className="flex flex-col gap-y-6">
            <div className="flex justify-between">
              <p>Amount</p>
              <p className="ml-auto text-sm">Balance: 1600.00 BPT</p>
            </div>
            <div className="flex w-full items-center justify-between gap-x-5">
              <div>
                <p className="text-text-secondary text-xl">0.00</p>
              </div>
              <div className="flex gap-x-2 items-center">
                <p className="text-lg font-bold">USDC</p>
                <button className="rounded-3xl border border-border bg-tr px-3 py-1 text-lg font-normal">
                  Max
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold">Lock Duration</p>
          <div className="flex gap-x-3">
            <div className="flex-1 flex gap-y-2 flex-col justify-center items-center border border-border rounded-lg p-4">
              <div className="flex gap-2">
                <Checkbox
                  className="border border-border rounded bg-transparent accent-button-primary outline-0"
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("checkbox1", checked)
                  }
                />
                <p
                  className={
                    checkedStates.checkbox1
                      ? "text-primary"
                      : "text-text-secondary"
                  }
                >
                  360 days
                </p>
              </div>
              <div
                className={
                  checkedStates.checkbox1
                    ? "text-primary"
                    : "text-text-secondary"
                }
              >
                Multiplier
                <span className="text-white font-semibold pl-2">3x</span>
              </div>
            </div>
            <div className="flex-1 flex gap-y-2 flex-col justify-center items-center border border-border rounded-lg p-4">
              <div className="flex gap-2">
                <Checkbox
                  className="border border-border rounded bg-transparent accent-button-primary outline-0"
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("checkbox2", checked)
                  }
                />
                <p
                  className={
                    checkedStates.checkbox2
                      ? "text-primary"
                      : "text-text-secondary"
                  }
                >
                  90 days
                </p>
              </div>
              <div
                className={
                  checkedStates.checkbox2
                    ? "text-primary"
                    : "text-text-secondary"
                }
              >
                Multiplier
                <span className="text-white font-semibold pl-2">5x</span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-3 mt-3">
            <div className="flex-1 flex gap-y-2 flex-col justify-center items-center border border-border rounded-lg p-4">
              <div className="flex gap-2">
                <Checkbox
                  className="border border-border rounded bg-transparent accent-button-primary outline-0"
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("checkbox3", checked)
                  }
                />
                <p
                  className={
                    checkedStates.checkbox3
                      ? "text-primary"
                      : "text-text-secondary"
                  }
                >
                  180 days
                </p>
              </div>
              <div
                className={
                  checkedStates.checkbox3
                    ? "text-primary"
                    : "text-text-secondary"
                }
              >
                Multiplier
                <span className="text-white font-semibold pl-2">4x</span>
              </div>
            </div>
            <div className="flex-1 flex gap-y-2 flex-col justify-center items-center border border-border rounded-lg p-4">
              <div className="flex gap-2">
                <Checkbox
                  className="border border-border rounded bg-transparent accent-button-primary outline-0"
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("checkbox4", checked)
                  }
                />
                <p
                  className={
                    checkedStates.checkbox4
                      ? "text-primary"
                      : "text-text-secondary"
                  }
                >
                  60 days
                </p>
              </div>
              <div
                className={
                  checkedStates.checkbox4
                    ? "text-primary"
                    : "text-text-secondary"
                }
              >
                Multiplier
                <span className="text-white font-semibold pl-2">2x</span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-3 mt-3">
            <div className="w-3/6 flex gap-y-2 flex-col justify-center items-center border border-border rounded-lg p-4">
              <div className="flex gap-2">
                <Checkbox
                  className="border border-border rounded bg-transparent accent-button-primary outline-0"
                  onCheckedChange={(checked) =>
                    handleCheckboxChange("checkbox5", checked)
                  }
                />
                <p
                  className={
                    checkedStates.checkbox5
                      ? "text-primary"
                      : "text-text-secondary"
                  }
                >
                  30 days
                </p>
              </div>
              <div
                className={
                  checkedStates.checkbox5
                    ? "text-primary"
                    : "text-text-secondary"
                }
              >
                Multiplier
                <span className="text-white font-semibold pl-2">1.5x</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 mb-2">
          <button className="py-2 w-full rounded-lg text-lg bg-primary font-bold">
            Stake
          </button>
        </div>
      </DialogContent>
    </div>
  );
}
