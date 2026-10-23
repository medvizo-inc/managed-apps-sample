export const dynamic = "force-dynamic";
export default function Page() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 40 }}>
      <h1>Managed Apps sample</h1>
      <p>Deploy check 4.</p>
      <p>Rendered on the server at {new Date().toISOString()}.</p>
      <p>Public build value: {process.env.NEXT_PUBLIC_SAMPLE_LABEL ?? "none"}</p>
    </main>
  );
}
