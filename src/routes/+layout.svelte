<script>
	import "../app.pcss";

	import { Toaster } from "$lib/components/ui/sonner";
	import { ModeWatcher } from "mode-watcher";
</script>

<Toaster />
<ModeWatcher />

<slot />
