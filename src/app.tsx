import { Editor } from './components/editor';

export function App() {
  return (
    <div className="min-h-screen text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-8">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[970px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-100 border-r border-r-zinc-100 p-4"></aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}
