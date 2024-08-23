import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { initialContent } from './initialcontent';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { common, createLowlight } from 'lowlight';
import 'highlight.js/styles/atom-one-dark-reasonable.css';

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      CodeBlockLowlight.configure({
        lowlight: createLowlight(common),
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  });

  return (
    <>
      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-violet"
      />
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-zinc-600"
          editor={editor}
        >
          <button className="p-2 text-zinc-200 text-sm flex items-center font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
            Bold
          </button>
          <button className="p-2 text-zinc-200 text-sm flex items-center font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
            Bold
          </button>
          <button className="p-2 text-zinc-200 text-sm flex items-center font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
            Bold
          </button>
          <button className="p-2 text-zinc-200 text-sm flex items-center font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
            Bold
          </button>
        </BubbleMenu>
      )}
    </>
  );
}
