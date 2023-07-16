"use client";

import { useRouter } from "next/navigation";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  const router = useRouter();

  return (
    <li className="flex gap-1 items-center justify-between py-2">
      <div className="flex gap-2 items-center">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={complete}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>
      <input
        className="border border-slate-300 text-slate-300 px-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        type="button"
        value="🗑️"
        onClick={(e) => {
          deleteTodo(id);
          router.refresh();
        }}
      />
    </li>
  );
}
