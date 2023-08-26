using UnityEngine;

public class DrinkMaterial : MonoBehaviour
{

    private const int WaterLayer = 4;
    private const int ToppingsLayer = 7;
    private const int IceLayer = 8;
    private const int GlassLayer = 3;


    private bool isCollided = false;

    [SerializeField] private Rigidbody2D rb;

    private bool isNeverInView;
    private bool isRectTransformNull;

    private RectTransform rectTransform;

    public bool AllowCollisionWithWater { get; set; } = true;


    public Rigidbody2D Rb
    {
        get
        {
            if (rb == null)
            {
                rb = GetComponent<Rigidbody2D>();
            }

            return rb;
        }
    }

    public void Set(float scale)
    {
        ((RectTransform)transform).sizeDelta *= scale;
    }

    private void Awake()
    {
        if (rb == null)
        {
            rb = GetComponent<Rigidbody2D>();
        }
    }

    private void Start()
    {
        currentWidth = Screen.width;
        currentHeight = Screen.height;
        if (rectTransform == null)
            rectTransform = transform as RectTransform;
        isRectTransformNull = rectTransform == null;
        this.RegisterListener(EventID.Destroy, (param) => FallsOutOfView());
    }


    private void OnDestroy()
    {
        this.RemoveListener(EventID.Destroy, (param) => FallsOutOfView());

    }

    protected virtual void OnEnable()
    {
        isNeverInView = true;
    }

    private void OnBecameInvisible()
    {
        FallsOutOfView();
    }
    int currentWidth, currentHeight;
    private void Update()
    {
        if ((currentHeight != Screen.height) && (currentWidth != Screen.width))
        {
            currentWidth = Screen.width;
            currentHeight = Screen.height;
            rb.isKinematic = true;
        }
        else
        {
            rb.isKinematic = false;
        }
    }
    private void LateUpdate()
    {
        //if (isRectTransformNull) return;


        //if (IsInView())
        //{
        //    isNeverInView = false;
        //    return;
        //}

        //if (isNeverInView) return;

        //FallsOutOfView();
    }

    private bool IsInView()
    {
        return rectTransform.IsVisibleFrom(Camera.main);
    }


    public void Destroying()
    {
        FallsOutOfView();
    }
    protected virtual void FallsOutOfView()
    {
        Destroy(gameObject);
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (isCollided) return;
        if ((collision.gameObject.layer != WaterLayer) && (collision.gameObject.layer != GlassLayer) && (collision.gameObject.layer != ToppingsLayer)) return;
        if ((gameObject.layer != ToppingsLayer) && (gameObject.layer != IceLayer)) return;
        if (!IsInView()) return;
        isCollided = true;
        PlaySound(collision);
    }

    private void PlaySound(Collision2D collision)
    {
        if (gameObject.layer == IceLayer)
        {
            SoundManager.Instance.PlaySound(2);
            return;
        }
        else
        {
            SoundManager.Instance.PlaySound(1);
        }

    }
}