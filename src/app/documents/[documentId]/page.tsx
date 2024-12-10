import { Editor } from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: number }>;
}
export default async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <Editor />
    </div>
  );
}
